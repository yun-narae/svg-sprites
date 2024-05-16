import gulp from 'gulp';
import gulpif from 'gulp-if';
import replace from 'gulp-replace';
import { stacksvg } from 'gulp-stacksvg';
import packageInfo from './package.json' assert { type: 'json' };

/* -------------------------------------------------------------------------- */

// 입력 폴더 경로 (모든 SVG 파일)
const INPUT = './example/svg/**/*.svg';
// 출력 폴더
const OUTPUT = './example/icons';
// 출력 파일 이름
const FILENAME = 'stack';
// GitHub 저장소 서브 디렉토리 이름
const BASE = packageInfo.name;
// 미리보기(preview) 생성 여부
const MAKE_PREVIEW = true;

/* -------------------------------------------------------------------------- */

if (!BASE) {
  throw new Error(
    'package.json 파일에 name 속성 이름이 설정되어 있지 않습니다.'
  );
}

/* -------------------------------------------------------------------------- */

const { src, dest, parallel } = gulp;

export function makeSvgSprites() {
  return src(INPUT)
    .pipe(
      stacksvg({
        output: FILENAME,
        separator: '_',
        spacer: '-',
      })
    )
    .pipe(dest(OUTPUT));
}

export const svg = makeSvgSprites;

function copyIcons() {
  return src(['example/icons/**/*'])
    .pipe(dest('docs/icons'))
    .pipe(gulpif(MAKE_PREVIEW, dest(`preview/icons`)));
}

function replaceHTML() {
  return src(['example/index.html'])
    .pipe(replace(/=("|')\/(?!\/)/g, `="/`))
    .pipe(dest('docs'))
    .pipe(gulpif(MAKE_PREVIEW, dest(`preview`)));
}

function replaceCSS() {
  return src(['example/style.css'])
    .pipe(dest('docs'))
    .pipe(gulpif(MAKE_PREVIEW, dest(`preview`)));
}

export const build = parallel(copyIcons, replaceHTML, replaceCSS);

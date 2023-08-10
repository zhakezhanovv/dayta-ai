# Dayta AI Test Exercise

## How to install dependencies

    npm install

## Run

    npm run dev

## Build

    npm run build

## Description

Tools used for building this app:

1. Folder architecture - FSD (feature-sliced design).
2. Application architecture - MVVM (model-view-viewmodel).
3. CSS preprocessor - SCSS.
4. Framework - React.
5. Bundler - Vite.
6. Environment tools - ESLint, Prettier, Husky, Commitlint.

## Data structures considered:

1. `[
	{
		name: string
		course: string
		score: number
	}
]`

2. `[
	{
		name: string
		scores: [
			{
				score: number
				course: string
			}
		]
	}
]`

The favor was given to the first data structured due to the lack of nested array as in the second option. Considering time complexity, first data structure seems to be more effective.

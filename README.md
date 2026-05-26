# 🛍️ KREAM 쇼핑몰 퍼블리싱 프로젝트

## 📌 프로젝트 소개
멋쟁이사자처럼 프론트엔드 트랙 과제로 진행한 KREAM 쇼핑몰 프로젝트입니다.  
Figma 디자인을 기반으로 React 컴포넌트를 구성하고 상품 조회/등록/수정/삭제 페이지와 필터 · 정렬 기능을 구현했습니다.
이후 백엔드 API를 연동하여 더미데이터가 아닌 서버 데이터를 기반으로 상품 정보를 조회하고 관리할 수 있도록 개선했습니다.

## 🚀 기술 스택
- React
- JavaScript
- styled-components
- react-router-dom
- Vite
- REST API
- Git / GitHub

## ✨ 주요 기능
- KREAM 스타일 메인 페이지 UI 구현
- 상품 카드 리스트 구현
- 상품 단일 조회 페이지 구현
- 상품 등록 페이지 구현
- 상품 수정 페이지 구현
- 상품 삭제 모달 구현
- react-router-dom 기반 라우팅 연결
- API 기반 상품 목록 조회 구현
- API 기반 상품 상세 조회 구현
- API 기반 상품 등록 구현
- API 기반 상품 수정 구현
- API 기반 상품 삭제 구현
- 성별 / 색상 / 사이즈 / 가격대 / 종류 필터 기능 구현
- 평점순 / 리뷰순 정렬 기능 구현
- 이미지 업로드 기능 구현
- 공통 컴포넌트 분리

## 🎯 목표
- Figma 디자인을 React 코드로 구현하기
- 컴포넌트 단위로 UI 분리하기
- styled-components를 활용한 스타일링 연습
- react-router-dom을 활용한 라우팅 연습
- REST API를 활용한 서버 데이터 연동 연습
- 더미데이터를 실제 API 데이터로 대체하기
- API 응답 데이터를 상태로 관리하고 화면에 렌더링하기
- 상품 CRUD 기능을 API 요청과 연결하기
- Git 브랜치 전략과 커밋 컨벤션 연습
- 실제 협업 흐름에 맞춰 작업 브랜치에서 개발 후 develop에 반영하기

## 🎯 Git Convention
- 🎉 Start: Start New Project [:tada:]
- ✨ Feat: 새로운 기능을 추가 [:sparkles:]
- 🐛 Fix: 버그 수정 [:bug:]
- 🎨 Design: CSS 등 사용자 UI 디자인 변경 [:art:]
- ♻️ Refactor: 코드 리팩토링 [:recycle:]
- 🔧 Settings: Changing configuration files [:wrench:]
- 🗃️ Comment: 필요한 주석 추가 및 변경 [:card_file_box:]
- ➕ Dependency/Plugin: Add a dependency/plugin [:heavy_plus_sign:]
- 📝 Docs: 문서 수정 [:memo:]
- 🔀 Merge: Merge branches [:twisted_rightwards_arrows:]
- 🚀 Deploy: Deploying stuff [:rocket:]
- 🚚 Rename: 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 [:truck:]
- 🔥 Remove: 파일을 삭제하는 작업만 수행한 경우 [:fire:]
- ⏪️ Revert: 전 버전으로 롤백 [:rewind:]

## 🌲 Branch Convention

- `main` : 배포 가능한 브랜치, 항상 배포 가능한 상태를 유지
- `develop` : 다음 버전을 위한 개발 브랜치, 팀원들의 작업 결과물이 모이는 중심 브랜치
- `feat/#이슈번호/명칭` : 새로운 기능 개발 시 사용하는 브랜치
  - 예: `feat/#12/product-crud`
- `ui/#이슈번호/명칭` : 화면 UI 구현이나 스타일링 작업을 할 때 사용
  - 예: `ui/#12/login-form`
- `api/#이슈번호/명칭` : 데이터 통신, API 연동, 비즈니스 로직 구현 시 사용
  - 예: `api/#45/fetch-user-profile`

## 🌊 Flow

1. Issue 생성
2. 최신 상태의 `develop` 에서 새 브랜치 생성
3. 작업 완료 후 `develop`으로 Pull Request
4. 팀원들에게 리뷰 요청
5. 리뷰한 팀원이 `develop` 으로 병합
6. 병합 후 작업자가 해당 브랜치 삭제
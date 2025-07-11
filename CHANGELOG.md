# Change Log
All notable changes to **SmartTrip** are documented in this file.  
The format follows [Keep a Changelog](https://keepachangelog.com) and the
project adheres to [Semantic Versioning](https://semver.org).

---

## [0.3.0] – 2025-07-11  
**Feature 5 – User Authentication & Protected Routes**

### Added
* **PLAN-120 MAJOR** – Implemented **Parse SDK v6** authentication service  
  (`/src/services/authService.js`) with register, login, logout and session-validation helpers.
* **PLAN-121 MAJOR** – Created dedicated auth flow components and pages:  
  `AuthPage`, `LoginForm`, `RegisterForm`.
* **PLAN-122 MINOR** – Added `ProtectedRoute.js` higher-order component to
  secure private routes in React Router DOM v6.
* **PLAN-123 MINOR** – Added responsive top **navbar** showing user state and
  sign-out link.
* **PLAN-124 PATCH** – Added `auth.css` and global style variables for the
  new authentication screens.

### Changed
* **PLAN-125 MINOR** – Refactored route hierarchy: `/auth` hosts nested
  `login` and `register` routes; all other pages are wrapped with
  `ProtectedRoute`.
* **PLAN-126 PATCH** – Moved Parse keys to `/src/parseConfig.js` and documented
  local environment setup in the README.

### Fixed
* **PLAN-127 PATCH** – Resolved flash of unauthenticated content on hard refresh
  by validating session before rendering protected pages.
* **PLAN-128 PATCH** – Corrected form alignment and button hover states across
  all authentication screens.

---

## [Unreleased] – yyyy-mm-dd  
Planned improvements for **Feature 6 – User profile & preferences**.

### Added
* Placeholder Redux slice for user profile (currently disabled).

### Changed
_N/A_

### Fixed
_N/A_

---

## [0.2.0] – 2025-07-01  
**Feature 4 – React Router & Parse integration**

*(unchanged – see previous entry for details)*

---

## [0.1.0] – 2025-06-25  
**Initial working prototype**

*(unchanged – see previous entry for details)*

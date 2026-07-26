# ADR: Authentication and account posture

**Status:** active
**Date:** 2026-07-26

## D1: No accounts or authentication

**Decision:** The portfolio is intentionally accountless. All routes are public
static content. There is no Create account, Sign in, protected route, user
database, session, password, role, or account-management surface.

**Why:** The product is a single-author portfolio whose content is maintained
in source control. Adding identity would create privacy, recovery, security, and
accessibility work without enabling a user need.

**Authorization:** Deployment and source-control permissions remain outside the
application. They are not modeled as portfolio user accounts.

**Revisit when:** A real private capability is approved, such as a CMS, client
portal, private downloads, or authenticated editor. A contact form alone does
not justify accounts.

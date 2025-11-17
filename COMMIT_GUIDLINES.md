# Commit Message Guidelines

This project uses a structured commit message format to maintain readability, consistency, and a clean project history.  
These guidelines are based on the _Conventional Commits_ specification.

---

## 📝 Format

---

## 📌 Types

### **feat**

A new feature or functionality.

> Example: `feat(inventory): add item creation form`

### **fix**

A bug fix or correction.

> Example: `fix(api): resolve 500 error on POST /items`

### **docs**

Documentation changes only.

> Example: `docs: update installation steps`

### **style**

Code formatting or stylistic changes (no logic).

> Example: `style: format table component with prettier`

### **refactor**

Code restructuring without behavior changes.

> Example: `refactor(table): extract column generator`

### **perf**

Performance improvements.

> Example: `perf: optimize database query`

### **test**

Adding or updating tests.

> Example: `test(inventory): add unit tests for createItem()`

### **chore**

Maintenance tasks such as tooling, configs, or dependencies.

> Example: `chore: update tailwindcss to v4`

---

## 🔍 Scopes (Optional)

Scopes help clarify the area affected.  
Common scopes in this project include:

- `inventory`
- `table`
- `api`
- `auth`
- `db`
- `ui`

> Example with scope:  
> `feat(table): add dynamic column rendering`

---

## 📘 Examples

### Good:

feat(table): implement dynamic header generation
fix(db): correct migration path for production builds
docs: add roadmap and commit guideline files
refactor(api): split routes into separate modules

### Bad:

update stuff
fixes
i changed something

---

## ✔ Recommendations

- Keep descriptions short and clear.
- Use the imperative mood (“add” not “added”).
- One logical change per commit whenever possible.
- Use PR titles for broader explanations if needed.

---

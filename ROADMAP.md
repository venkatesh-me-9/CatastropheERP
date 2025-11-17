# CatastropheERP – Roadmap

This document outlines the planned features, ongoing work, and completed milestones for CatastropheERP.  
The goal is to build the system incrementally while maintaining clarity and direction.

---

## 🚀 Current Objective

### **1. Generic Table Component (In Progress)**

Build a reusable table component capable of adapting to any dataset passed into it.

**Goals:**

- Automatically render table headers based on data keys
- Handle dynamic data shapes
- Support sorting and filtering
- Action buttons (update and delete)
- Supports both numbered and unnumbered rows
- Hover to highlight the entire row
- ctrl+hover to highlight the column

---

## ✅ Completed Features

> _(This section will grow as development continues.)_

- Project setup with SvelteKit, TailwindCSS, DaisyUI, SQLite, and Socket.IO
- Core project structure established
- Initial design direction defined

---

## 🟡 Planned Features (Short-term)

### 2. **Inventory Module (Core MVP)**

- Create, edit, delete, and view inventory items
- Track quantities, categories, and metadata
- List view powered by the generic table component
- Basic validation and error handling

### 3. **Local SQLite Integration**

- Set up database schema
- Implement API endpoints for CRUD operations
- Add lightweight migration strategy

### 4. **Basic Authentication**

- Local login system
- User session handling
- Permissions groundwork for multi-organization support

---

## 🔵 Planned Features (Mid-term)

### 5. **Multi-Organization Support**

- Allow users to manage multiple “sub-apps” or “units” (like Meta → Facebook, Instagram, WhatsApp)
- Isolate data per organization
- Org switching UI

### 6. **Real-time Updates (Socket.IO)**

- Push inventory changes to all connected clients
- System notifications
- Online/offline indicators

### 7. **Analytics Dashboard**

- Overview of inventory counts, trends, and activity
- Charts and visualizations

---

## 🔮 Long-term Features (Future Enhancements)

### 8. **Roles & Permissions**

- Role-based access control
- User groups
- Per-module permission configuration

### 9. **Notifications System**

- Real-time alerts
- Email or internal messages (optional)
- Customizable notification rules

### 10. **UI/UX Enhancements**

- Full theme support
- Dark mode improvements
- Responsive layouts for all modules

---

## 📝 Notes

This roadmap is flexible.  
As the project evolves, features may shift, expand, or be replaced based on improved design decisions or practical limitations.

To suggest changes, open an issue or PR (future contributor-friendly workflow).

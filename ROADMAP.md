# CatastropheERP – Roadmap

This document outlines the planned features, ongoing work, and completed milestones for CatastropheERP.  
The goal is to build the system incrementally while maintaining clarity and direction.

---

## 🚀 Current Objective

### **Generic Table Component (In Progress)**

- Pin rows
- Pin columns
- Highlight a column on Ctrl + hover
- Support both numbered and unnumbered rows
- Provide sorting and filtering capabilities
- Include action buttons (update and delete)

---

## ✅ Completed Features

### **Generic Table Component**

- Server-Driven Column Visibility
- Highlight an entire row on hover

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

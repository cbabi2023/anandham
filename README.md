# Anandham - Multi-Platform Project

This is a monorepo containing three separate applications for the Anandham platform:

- **web-customer**: Customer-facing web application (Next.js + TypeScript)
- **web-admin**: Admin dashboard web application (Next.js + TypeScript)
- **mobile-customer**: Customer mobile application (Flutter)

## 📁 Project Structure

```
anandham/
├── web-customer/      # Customer web app (Next.js + TypeScript)
├── web-admin/         # Admin dashboard (Next.js + TypeScript)
└── mobile-customer/   # Mobile app (Flutter)
```

## 🚀 Getting Started

### Web Customer Application

The customer-facing web application built with Next.js 16, TypeScript, and Tailwind CSS.

```bash
cd web-customer
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

### Web Admin Application

The admin dashboard for managing the platform.

```bash
cd web-admin
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the admin dashboard.

**Note**: The admin app will run on a different port if the customer app is already running. You can specify a port with `npm run dev -- -p 3001`.

### Mobile Customer Application

The Flutter mobile application for customers.

```bash
cd mobile-customer
flutter pub get
flutter run
```

Make sure you have Flutter installed and a device/emulator running.

## 🛠️ Tech Stack

### Web Applications (web-customer & web-admin)
- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React

### Mobile Application (mobile-customer)
- **Framework**: Flutter
- **Language**: Dart
- **Platforms**: iOS, Android, Web, Windows, macOS, Linux

## 📝 Development

Each application is independent and can be developed separately. They share the same repository for easier code management and version control.

### Running All Applications

You can run all three applications simultaneously:

1. **Terminal 1** - Web Customer:
   ```bash
   cd web-customer && npm run dev
   ```

2. **Terminal 2** - Web Admin:
   ```bash
   cd web-admin && npm run dev -- -p 3001
   ```

3. **Terminal 3** - Mobile Customer:
   ```bash
   cd mobile-customer && flutter run
   ```

## 📦 Dependencies

Each application manages its own dependencies:
- `web-customer/package.json` - Web customer dependencies
- `web-admin/package.json` - Web admin dependencies
- `mobile-customer/pubspec.yaml` - Mobile app dependencies

## 🚢 Deployment

Each application can be deployed independently:

- **Web Customer**: Deploy to Vercel, Netlify, or any Node.js hosting
- **Web Admin**: Deploy to Vercel, Netlify, or any Node.js hosting
- **Mobile Customer**: Build and publish to App Store (iOS) and Google Play Store (Android)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

# MeroDhan- Stock Market Trading Application for Nepal

Welcome to **MeroDhan (मेरो धन)**, a Next.js-based stock market trading application tailored for the Nepalese stock market. MeroDhan empowers users with a seamless and efficient trading experience, combining real-time data analysis, portfolio management, and trading tools in one platform.

---

## Key Features

1. **Real-Time Market Data**

   - Live stock price updates from the Nepal Stock Exchange (NEPSE).
   - Real-time charts and historical data analysis.

2. **Portfolio Management**

   - Track and manage your stock investments.
   - Analyze portfolio performance with detailed metrics and visualizations.

3. **User-Friendly Trading Interface**

   - Simple and intuitive trading tools for buying and selling stocks.
   - Customizable watchlists for monitoring favorite stocks.

4. **Secure Authentication**

   - Google OAuth for seamless and secure user login.
   - Encrypted data storage for user information.

5. **Insights & Alerts**
   - Personalized stock insights and news.
   - Notifications for price movements, order statuses, and important events.

---

## Tech Stack

- **Frontend**: Next.js, TypeScript, React.js
- **Backend**: Node.js, Next.js API routes
- **Database**: MongoDB / PostgreSQL (planned for user and transaction data)
- **Authentication**: Google OAuth and NextAuth.js
- **Deployment**: Vercel / AWS / Render
- **Storage**: Amazon S3 for file uploads and data storage

---

## Installation

Follow these steps to set up the MeroDhan application locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/subigya-js/mero-dhan.git
   cd mero-dhan
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## Deployment

1. Build the application:

   ```bash
   npm run build
   ```

2. Start the server:

   ```bash
   npm start
   ```

3. Deploy using Vercel:
   - Install Vercel CLI: `npm install -g vercel`
   - Deploy: `vercel`

---

## Contribution Guidelines

We welcome contributions to improve MeroDhan! Follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature name'`.
4. Push to your branch: `git push origin feature-name`.
5. Create a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Acknowledgements

- Data sourced from Nepal Stock Exchange (NEPSE).
- Open-source libraries and tools used in the project.

---

## Contact

For support or inquiries, contact the development team at: **developer.subigya@gmail.com**

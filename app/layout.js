import Navbar from "./components/Navbar";
import ProfileCover from "./components/ProfileCover";
import Sidebar from "./components/Sidebar";
import "./globals.css";

export const metadata = {
  title: "Vinod Jarare | Portfolio",
  description: "This is Portfolio site of Vinod Jarare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen relative bg-gray-50 pb-10">
          <ProfileCover />
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap px-4">
              <div className="w-full lg:w-1/3 ">
                <Sidebar />
              </div>
              <div className="w-full lg:w-2/3 ">
                <Navbar />
                {children}
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

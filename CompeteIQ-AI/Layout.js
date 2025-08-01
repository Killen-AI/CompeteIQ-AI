import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Brain, FileText, Plus, Search, TrendingUp } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  const navigationItems = [
    {
      title: "Dashboard",
      url: createPageUrl("Dashboard"),
      icon: TrendingUp,
    },
    {
      title: "New Analysis",
      url: createPageUrl("CreateBrief"),
      icon: Plus,
    },
    {
      title: "Research Hub",
      url: createPageUrl("Research"),
      icon: Search,
    }
  ];

  const isActive = (url) => location.pathname === url;

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #e0e0e0 0%, #e8e8e8 100%)',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      <style>{`
        :root {
          --bg-primary: #e0e0e0;
          --bg-secondary: #d6d6d6;
          --bg-tertiary: #eaeaea;
          --text-primary: #2c2c2c;
          --text-secondary: #4a4a4a;
          --text-muted: #6b6b6b;
          --accent-blue: #6b7db8;
          --accent-green: #7db89a;
          --shadow-light: rgba(255, 255, 255, 0.8);
          --shadow-dark: rgba(0, 0, 0, 0.15);
        }

        .neu-inset {
          box-shadow: 
            inset 6px 6px 12px var(--shadow-dark),
            inset -6px -6px 12px var(--shadow-light);
        }

        .neu-raised {
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -6px -6px 12px var(--shadow-light);
        }

        .neu-pressed {
          box-shadow: 
            inset 3px 3px 6px var(--shadow-dark),
            inset -3px -3px 6px var(--shadow-light);
        }

        .neu-button {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .neu-button:hover {
          transform: translateY(-1px);
        }

        .neu-button:active {
          transform: translateY(0);
          box-shadow: 
            inset 3px 3px 6px var(--shadow-dark),
            inset -3px -3px 6px var(--shadow-light);
        }

        .neu-card {
          background: var(--bg-primary);
          border: none;
          border-radius: 16px;
        }

        .neu-input {
          background: var(--bg-primary);
          border: none;
          border-radius: 12px;
        }

        .neu-nav-item {
          background: var(--bg-primary);
          border-radius: 12px;
          border: none;
          transition: all 0.2s ease;
        }

        .neu-nav-item.active {
          background: linear-gradient(135deg, var(--accent-blue), #5a6ba8);
          color: white;
        }

        .neu-nav-item.active .icon {
          color: white;
        }

        .neu-sidebar {
          background: var(--bg-primary);
          border-right: 1px solid rgba(0, 0, 0, 0.05);
        }
      `}</style>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 neu-sidebar neu-raised flex flex-col">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 neu-raised rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-800">CompeteIQ</h1>
                <p className="text-xs text-gray-500">Intelligence Platform</p>
              </div>
            </div>

            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`neu-nav-item neu-button flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all ${
                    isActive(item.url)
                      ? 'active text-white'
                      : 'text-gray-700 hover:text-gray-900 neu-raised'
                  }`}
                >
                  <item.icon className={`w-4 h-4 icon ${isActive(item.url) ? 'text-white' : 'text-gray-500'}`} />
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-auto p-6">
            <div className="neu-inset rounded-lg p-4">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <FileText className="w-4 h-4" />
                <span>Powered by AI Research</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
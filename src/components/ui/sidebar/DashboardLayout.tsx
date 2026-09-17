import { Outlet } from "react-router";
import { useState } from "react";

import { cn } from "../../../lib/utils";
import { Dashboard } from "../../../pages/Dashboard";
import { ShadButton } from "../base/ShadButton";
import { Menu } from "lucide-react";

export function DashboardLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={cn('dark min-h-screen w-full flex', {'debug-screens': process.env.NODE_ENV === 'development'})}>
      {/* Mobile toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <ShadButton
          variant="secondary"
          className="rounded-full p-2"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-4 w-4" />
        </ShadButton>
      </div>

      {/* Sidebar - desktop always visible, mobile overlay */}
      <div
        className={cn(
          'border mr-6',
          'fixed inset-y-0 left-0 z-40 transform transition-transform duration-200 lg:relative lg:translate-x-0',
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <Dashboard />
      </div>

      {/* Mobile backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main content area where <Outlet /> will render the matched route component */}
      <div className="flex-1 mr-6">
        <Outlet/>
      </div>
    </div>
  );
}
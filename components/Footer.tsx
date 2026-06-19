export function Footer() {
  return (
    <footer className="border-t border-[#D2D2D7]/50 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <p className="text-sm text-[#86868B]">
          &copy; {new Date().getFullYear()} CognitiveAction.ai. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

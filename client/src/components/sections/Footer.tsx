export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <span className="font-display font-bold text-2xl tracking-tighter text-white">
            LUSH ENGINEERING
          </span>
        </div>
        <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
          Providing excellence in electrical and mechanical engineering solutions across Botswana since 2020.
        </p>
        <div className="text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} Lush Engineering Proprietary Limited. All Rights Reserved.
          <br />
          UIN: BW00002121805
        </div>
      </div>
    </footer>
  );
}

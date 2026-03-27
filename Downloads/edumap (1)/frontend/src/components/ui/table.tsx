export const Table = ({ className = "", ...props }: any) => (
  <div className="w-full overflow-auto">
    <table className={`w-full text-sm ${className}`} {...props} />
  </div>
);

export const TableHeader = (props: any) => <thead {...props} />;
export const TableBody = (props: any) => <tbody {...props} />;

export const TableRow = ({ className = "", ...props }: any) => (
  <tr
    className={`border-b border-border hover:bg-secondary/20 transition-colors ${className}`}
    {...props}
  />
);

export const TableHead = ({ className = "", ...props }: any) => (
  <th
    className={`px-4 py-3 text-left font-semibold text-foreground ${className}`}
    {...props}
  />
);

export const TableCell = ({ className = "", ...props }: any) => (
  <td
    className={`px-4 py-3 text-muted-foreground ${className}`}
    {...props}
  />
);
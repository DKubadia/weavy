import {
  Search,
  Bell,
  ChevronDown,
  ChevronRight,
  Home,
  ListTodo,
  ArrowLeftRight,
  CreditCard,
  Wallet,
  Landmark,
  Banknote,
  Route,
  Send,
  Bell as BellSmall,
  Settings,
  Plus,
  MoreHorizontal,
  Check,
} from "lucide-react";

const sidebarItems = [
  { icon: Home, label: "Home", active: true },
  { icon: ListTodo, label: "Tasks", badge: "10" },
  { icon: ArrowLeftRight, label: "Transactions" },
  { icon: Banknote, label: "Payments", chevron: true },
  { icon: CreditCard, label: "Cards" },
  { icon: Wallet, label: "Capital" },
  { icon: Landmark, label: "Accounts", chevron: true },
];

const workflowItems = [
  { icon: Route, label: "Trake rutes" },
  { icon: Send, label: "Payments" },
  { icon: BellSmall, label: "Notifications" },
  { icon: Settings, label: "Settings" },
];

const actionButtons = [
  { label: "Send", primary: true },
  { label: "Request" },
  { label: "Transfer" },
  { label: "Deposit" },
  { label: "Pay Bill" },
  { label: "Create Invoice" },
];

const accountRows = [
  { label: "Credit", amount: "$98,125.50" },
  { label: "Treasury", amount: "$6,750,200.00" },
  { label: "Operations", amount: "$1,592,864.82" },
];

const transactions = [
  {
    date: "Aug 21",
    description: "AWS",
    amount: "-$5,200",
    amountColor: "text-foreground",
    status: "Pending",
    statusColor: "text-amber-500",
    dot: "bg-amber-500",
  },
  {
    date: "Aug 20",
    description: "Client Payment",
    amount: "+$125,000",
    amountColor: "text-green-600",
    status: "Completed",
    statusColor: "text-green-600",
    dot: "bg-green-500",
  },
  {
    date: "Aug 19",
    description: "Payroll",
    amount: "-$85,450",
    amountColor: "text-foreground",
    status: "Completed",
    statusColor: "text-green-600",
    dot: "bg-green-500",
  },
  {
    date: "Aug 18",
    description: "Office Supplies",
    amount: "-$1,200",
    amountColor: "text-foreground",
    status: "Completed",
    statusColor: "text-green-600",
    dot: "bg-green-500",
  },
];

function BalanceChart() {
  // Smooth cubic Bézier area chart in the accent color.
  return (
    <svg
      viewBox="0 0 320 80"
      preserveAspectRatio="none"
      className="h-20 w-full"
    >
      <defs>
        <linearGradient id="balanceFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.15" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,60 C40,58 60,30 100,34 C140,38 160,52 200,40 C240,28 260,10 320,18 L320,80 L0,80 Z"
        fill="url(#balanceFill)"
      />
      <path
        d="M0,60 C40,58 60,30 100,34 C140,38 160,52 200,40 C240,28 260,10 320,18"
        fill="none"
        stroke="hsl(var(--accent))"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DashboardPreview() {
  return (
    <div className="text-[11px] select-none pointer-events-none rounded-xl overflow-hidden bg-background border border-border">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-3 border-b border-border px-3 py-2">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-foreground text-[10px] font-semibold text-background">
            N
          </div>
          <span className="font-semibold text-foreground">Nexora</span>
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </div>

        <div className="hidden sm:flex flex-1 max-w-xs items-center gap-2 rounded-md border border-border bg-secondary/50 px-2 py-1 text-muted-foreground">
          <Search className="h-3 w-3" />
          <span className="flex-1">Search</span>
          <span className="rounded border border-border bg-background px-1 text-[9px]">
            ⌘K
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="rounded-md bg-foreground px-2 py-1 text-[10px] font-medium text-background">
            Move Money
          </div>
          <Bell className="h-3.5 w-3.5 text-muted-foreground" />
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[9px] font-semibold text-accent-foreground">
            JB
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-40 shrink-0 border-r border-border px-2 py-3">
          <div className="space-y-0.5">
            {sidebarItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${
                  item.active
                    ? "bg-secondary text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
              >
                <item.icon className="h-3.5 w-3.5" />
                <span className="flex-1">{item.label}</span>
                {item.badge && (
                  <span className="rounded-full bg-foreground px-1.5 text-[9px] text-background">
                    {item.badge}
                  </span>
                )}
                {item.chevron && (
                  <ChevronRight className="h-3 w-3 opacity-60" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 px-2 text-[9px] font-semibold uppercase tracking-wide text-muted-foreground/70">
            Workflows
          </div>
          <div className="mt-1 space-y-0.5">
            {workflowItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-md px-2 py-1.5 text-muted-foreground"
              >
                <item.icon className="h-3.5 w-3.5" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 bg-secondary/30 p-4">
          <div className="text-sm font-semibold text-foreground">
            Welcome, Jane
          </div>

          {/* Action buttons */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {actionButtons.map((btn) => (
              <div
                key={btn.label}
                className={`rounded-full px-3 py-1 text-[10px] font-medium ${
                  btn.primary
                    ? "bg-accent text-accent-foreground"
                    : "border border-border bg-background text-foreground"
                }`}
              >
                {btn.label}
              </div>
            ))}
            <span className="text-[10px] text-muted-foreground">Customize</span>
          </div>

          {/* Two cards */}
          <div className="mt-4 flex gap-3">
            {/* Balance card */}
            <div className="flex-1 basis-0 rounded-xl border border-border bg-background p-3">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <span>Mercury Balance</span>
                <Check className="h-3 w-3 text-green-600" />
              </div>
              <div className="mt-1 text-lg font-semibold text-foreground">
                $8,450,190
                <span className="text-xs text-muted-foreground">.32</span>
              </div>
              <div className="mt-1 flex items-center gap-3 text-[10px]">
                <span className="text-muted-foreground">Last 30 Days</span>
                <span className="text-green-600">+$1.8M</span>
                <span className="text-red-500">-$900K</span>
              </div>
              <div className="mt-2">
                <BalanceChart />
              </div>
            </div>

            {/* Accounts card */}
            <div className="flex-1 basis-0 rounded-xl border border-border bg-background p-3">
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground">Accounts</span>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Plus className="h-3 w-3" />
                  <MoreHorizontal className="h-3 w-3" />
                </div>
              </div>
              <div className="mt-1">
                {accountRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between py-3 text-xs"
                  >
                    <span className="text-muted-foreground">{row.label}</span>
                    <span className="font-medium text-foreground">
                      {row.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transactions table */}
          <div className="mt-4 rounded-xl border border-border bg-background p-3">
            <div className="font-medium text-foreground">
              Recent Transactions
            </div>
            <table className="mt-2 w-full text-left text-[10px]">
              <thead>
                <tr className="text-muted-foreground">
                  <th className="pb-2 font-normal">Date</th>
                  <th className="pb-2 font-normal">Description</th>
                  <th className="pb-2 font-normal text-right">Amount</th>
                  <th className="pb-2 font-normal text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.description} className="border-t border-border">
                    <td className="py-2 text-muted-foreground">{tx.date}</td>
                    <td className="py-2 text-foreground">{tx.description}</td>
                    <td
                      className={`py-2 text-right font-medium ${tx.amountColor}`}
                    >
                      {tx.amount}
                    </td>
                    <td className="py-2 text-right">
                      <span
                        className={`inline-flex items-center gap-1 ${tx.statusColor}`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${tx.dot}`}
                        />
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

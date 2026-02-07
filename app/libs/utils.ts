export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount);
};

export const formatDate = (date: string | Date): string => {
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    }).format(new Date(date));
};

export const cn = (...classes: (string | undefined | null | false)[]): string => {
    return classes.filter(Boolean).join(" ");
};

export const truncate = (str: string, length: number): string => {
    return str.length > length ? str.substring(0, length) + "..." : str;
};

export const getInitials = (name: string): string => {
    return name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
};

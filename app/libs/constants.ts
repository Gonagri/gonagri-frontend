export const PRODUCT_CATEGORIES = [
    "All",
    "Grains",
    "Vegetables",
    "Fruits",
    "Tubers",
    "Legumes",
    "Livestock",
    "Dairy",
    "Poultry",
] as const;

export const PRODUCT_IMAGES = {
    maize: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=800",
    tomatoes: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800",
    beans: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=80&w=800",
    bananas: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=800",
    potatoes: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=800",
    onions: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&q=80&w=800",
    avocados: "https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&q=80&w=800",
    carrots: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=800",
    cabbage: "https://images.unsplash.com/photo-1594282486829-1f0f5c5f8c8f?auto=format&fit=crop&q=80&w=800",
    rice: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800",
    wheat: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=800",
    milk: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=800",
    eggs: "https://images.unsplash.com/photo-1582722003071-dac0a46f87ff?auto=format&fit=crop&q=80&w=800",
    chicken: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80&w=800",
    beef: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=800",
    pork: "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?auto=format&fit=crop&q=80&w=800",
    placeholder: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=800",
    farm: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    farmer: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800",
    harvest: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=800",
} as const;

export const DEFAULT_AVATAR = "https://ui-avatars.com/api/?background=22c55e&color=fff&bold=true&size=200";

export const ORDER_STATUSES = {
    PENDING: "Pending",
    PROCESSING: "Processing",
    COMPLETED: "Completed",
    CANCELLED: "Cancelled",
    DELIVERED: "Delivered",
} as const;

export const USER_ROLES = {
    FARMER: "farmer",
    BUYER: "buyer",
    ADMIN: "admin",
} as const;

export const PAYMENT_METHODS = {
    MPESA: "M-Pesa",
    CARD: "Credit/Debit Card",
    BANK_TRANSFER: "Bank Transfer",
} as const;

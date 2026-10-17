import React, { useState, useEffect, useMemo } from 'react';
import {
  Coffee,
  ShoppingBag,
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  Clock,
  Users,
  ChevronRight,
  Plus,
  Minus,
  Trash2,
  X,
  CheckCircle,
  AlertCircle,
  Menu as MenuIcon,
  Search,
  Lock,
  Unlock,
  CreditCard,
  QrCode,
  DollarSign,
  Truck,
  Store,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ChevronDown,
  Edit2,
  Save,
  KeyRound,
  Settings,
  Image as ImageIcon,
  Check,
  Eye,
  EyeOff
} from 'lucide-react';

const INITIAL_MENU_ITEMS = [
  {
    id: 'tc-1',
    name: 'Cold Coffee (100ml)',
    category: 'Tea & Coffee',
    price: 20,
    description: 'Chilled, creamy, hand-beaten cold coffee in convenient 100ml size.',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  },
  {
    id: 'tc-2',
    name: 'Cold Coffee (250ml)',
    category: 'Tea & Coffee',
    price: 40,
    description: 'Refreshing thick cafe-style cold coffee served chilled in 250ml glass.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  },
  {
    id: 'tc-3',
    name: 'Black Coffee',
    category: 'Tea & Coffee',
    price: 15,
    description: 'Rich, bold, freshly brewed hot aromatic black coffee.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  },
  {
    id: 'tc-4',
    name: 'Hot Coffee',
    category: 'Tea & Coffee',
    price: 20,
    description: 'Creamy frothy hot coffee prepared with fresh milk.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  },
  {
    id: 'tc-5',
    name: 'Special Tea',
    category: 'Tea & Coffee',
    price: 10,
    description: 'Desi Kadak Chai brewed with ginger and fragrant cardamom.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  },
  {
    id: 'tc-6',
    name: 'Black Tea',
    category: 'Tea & Coffee',
    price: 8,
    description: 'Light, herbal-infused refreshing black tea.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  },
  {
    id: 'tc-7',
    name: 'Oreo Shake',
    category: 'Tea & Coffee',
    price: 50,
    description: 'Rich thick vanilla milk blended with crunchy Oreo cookies.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  },
  {
    id: 'tc-8',
    name: 'KitKat Shake',
    category: 'Tea & Coffee',
    price: 50,
    description: 'Crunchy KitKat wafer chocolate blended thick shake.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  },
  {
    id: 'tc-9',
    name: 'Chocolate Shake',
    category: 'Tea & Coffee',
    price: 50,
    description: 'Velvety dark chocolate shake topped with chocolate drizzle.',
    image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  },
  {
    id: 'tc-10',
    name: 'Sweet Lassi',
    category: 'Tea & Coffee',
    price: 20,
    description: 'Traditional sweet churned curd lassi served cool.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  },
  {
    id: 'sn-1',
    name: 'Bread Pakoda',
    category: 'Snacks',
    price: 12,
    description: 'Golden spiced potato stuffed crispy deep fried bread fritter.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  },
  {
    id: 'sn-2',
    name: 'Paneer Bread Pakoda',
    category: 'Snacks',
    price: 25,
    description: 'Bread pakoda stuffed with generous slice of fresh cottage paneer.',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  },
  {
    id: 'sn-3',
    name: 'Steam Momo',
    category: 'Momos',
    price: 10,
    description: 'Hot steamed vegetable dumplings served with spicy garlic red chutney.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  },
  {
    id: 'sn-4',
    name: 'Fry Momo',
    category: 'Momos',
    price: 20,
    description: 'Golden crispy fried vegetable momos with fiery red dip.',
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  },
  {
    id: 'sn-5',
    name: 'Veg Roll',
    category: 'Snacks',
    price: 12,
    description: 'Crispy flatbread wrap loaded with sauteed spiced veggies & sauces.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  },
  {
    id: 'sn-6',
    name: 'Aalu Fries',
    category: 'Snacks',
    price: 15,
    description: 'Crunchy potato French fries seasoned with cafe special peri-peri masala.',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  },
  {
    id: 'sn-7',
    name: 'Pani Puri',
    category: 'Snacks',
    price: 10,
    description: 'Crispy hollow puris served with tangy mint water and spicy potato filling.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  },
  {
    id: 'bg-1',
    name: 'Aalu Tikki Burger',
    category: 'Burgers',
    price: 30,
    description: 'Crispy seasoned spiced potato patty, sliced tomato, onion & creamy mayo.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  },
  {
    id: 'bg-2',
    name: 'Paneer Tikki Burger',
    category: 'Burgers',
    price: 45,
    description: 'Tender spiced paneer patty grilled with fresh herbs, crisp veggies & sauce.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  },
  {
    id: 'sw-1',
    name: 'Grilled Sandwich',
    category: 'Sandwiches',
    price: 40,
    description: 'Golden grilled sandwich toasted to perfection with spiced veggie filling.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  },
  {
    id: 'cf-1',
    name: 'Veg Hakka Noodles',
    category: 'Chinese Food',
    price: 30,
    description: 'Wok tossed noodles with crunchy cabbage, capsicum, carrots, and dark soy.',
    image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  },
  {
    id: 'cf-2',
    name: 'Paneer Hakka Noodles',
    category: 'Chinese Food',
    price: 50,
    description: 'Wok fried noodles loaded with golden paneer cubes and Asian spices.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  },
  {
    id: 'pz-1',
    name: 'Cheese Pizza',
    category: 'Pizza',
    description: 'Classic rich melted mozzarella cheese on handcrafted herbed crust.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: true,
    sizes: { Small: 65, Medium: 120, Large: 180 }
  },
  {
    id: 'pz-2',
    name: 'Double Cheese Pizza',
    category: 'Pizza',
    description: 'Extra loaded double layer of liquid and stretch mozzarella cheese.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: true,
    sizes: { Small: 75, Medium: 140, Large: 210 }
  },
  {
    id: 'pz-3',
    name: 'Paneer Pizza',
    category: 'Pizza',
    description: 'Diced marinated tandoori paneer, sweet corn, onions & mozzarella.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: true,
    sizes: { Small: 85, Medium: 160, Large: 240 }
  },
  {
    id: 'pz-4',
    name: 'Veggies Pizza',
    category: 'Pizza',
    description: 'Crisp bell peppers, diced onions, tomatoes, sweet corn & herbs.',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: true,
    sizes: { Small: 90, Medium: 170, Large: 255 }
  },
  {
    id: 'pz-5',
    name: 'Farmhouse Pizza',
    category: 'Pizza',
    description: 'Ultimate overload of paneer, capsicum, mushroom, olives & triple cheese blend.',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: true,
    sizes: { Small: 99, Medium: 190, Large: 285 }
  },
  {
    id: 'cd-1',
    name: 'Chilled Thums Up / Sprite',
    category: 'Cold Drinks',
    price: null,
    priceNote: 'Price Coming Soon',
    description: 'Ice cold carbonated soft drink bottle.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  },
  {
    id: 'cm-1',
    name: 'Shyam Supreme Duo Combo',
    category: 'Special Cafe Combos',
    price: null,
    priceNote: 'Price Coming Soon',
    description: 'Cheese Pizza Medium + Aalu Burger + 2x Cold Coffee (Ask at counter).',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false
  }
];

const CATEGORIES = [
  'All',
  'Pizza',
  'Burgers',
  'Sandwiches',
  'Chinese Food',
  'Momos',
  'Snacks',
  'Tea & Coffee',
  'Cold Drinks',
  'Special Cafe Combos'
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const [toastMessage, setToastMessage] = useState(null);
  const showToast = (msg, type = 'success') => {
    setToastMessage({ msg, type });
    setTimeout(() => setToastMessage(null), 3000);
  };

  const [menuItems, setMenuItems] = useState(() => {
    const saved = localStorage.getItem('ssc_menu_items');
    return saved ? JSON.parse(saved) : INITIAL_MENU_ITEMS;
  });

  const [pizzaSizes, setPizzaSizes] = useState({
    'pz-1': 'Small',
    'pz-2': 'Small',
    'pz-3': 'Small',
    'pz-4': 'Small',
    'pz-5': 'Small'
  });

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('ssc_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  const [deliveryFee, setDeliveryFee] = useState(() => {
    const saved = localStorage.getItem('ssc_delivery_fee');
    return saved !== null ? Number(saved) : 50;
  });
  const [deliveryFeeInput, setDeliveryFeeInput] = useState(deliveryFee.toString());

  const [restaurantSettings, setRestaurantSettings] = useState(() => {
    const saved = localStorage.getItem('ssc_restaurant_settings');
    return saved
      ? JSON.parse(saved)
      : {
          phone: '+91 74858 69591',
          whatsapp: '+91 74858 69591',
          upiId: '9534518551@ybl',
          address: 'बम्बर कलाग्राम में स्थित, नवीन अस्पताल के सामने!',
          hours: '8:00 AM – 10:00 PM Daily',
          isOpen: true
        };
  });

  const [adminPassword, setAdminPassword] = useState(() => {
    return localStorage.getItem('ssc_admin_password') || '1234';
  });
  const [adminPinInput, setAdminPinInput] = useState('');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminAuthError, setAdminAuthError] = useState('');

  const [currPasswordInput, setCurrPasswordInput] = useState('');
  const [newPasswordInput, setNewPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const [passwordChangeError, setPasswordChangeError] = useState('');
  const [passwordChangeSuccess, setPasswordChangeSuccess] = useState('');

  const [adminSubTab, setAdminSubTab] = useState('orders');

  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [newProductForm, setNewProductForm] = useState({
    name: '',
    category: 'Snacks',
    description: '',
    price: '',
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80',
    available: true,
    hasSizes: false,
    smallPrice: '',
    medPrice: '',
    largePrice: ''
  });

  const [editingProduct, setEditingProduct] = useState(null);

  const [orderType, setOrderType] = useState('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiRefId, setUpiRefId] = useState('');
  const [lastPlacedOrder, setLastPlacedOrder] = useState(null);
  const [orderConfirmedModal, setOrderConfirmedModal] = useState(false);

  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    request: ''
  });
  const [bookingConfirmedModal, setBookingConfirmedModal] = useState(null);

  const [ordersList, setOrdersList] = useState(() => {
    const saved = localStorage.getItem('ssc_orders');
    return saved
      ? JSON.parse(saved)
      : [
          {
            orderId: 'SSC1001',
            date: '2026-10-16 14:30',
            customerName: 'Rahul Kumar',
            customerPhone: '9876543210',
            orderType: 'delivery',
            items: [
              { name: 'Cheese Pizza', size: 'Medium', price: 120, qty: 1 },
              { name: 'Special Tea', price: 10, qty: 2 }
            ],
            subtotal: 140,
            deliveryCharge: 50,
            total: 190,
            paymentMethod: 'UPI',
            paymentStatus: 'Submitted',
            upiRefId: 'UTR492837190',
            deliveryAddress: 'Near Primary School, Babhar Kalagram',
            status: 'Preparing'
          }
        ];
  });
  const [bookingsList, setBookingsList] = useState(() => {
    const saved = localStorage.getItem('ssc_bookings');
    return saved
      ? JSON.parse(saved)
      : [
          {
            bookingId: 'TB-742',
            name: 'Vikram Singh',
            phone: '9835012345',
            date: '2026-10-18',
            time: '19:30',
            guests: '4',
            request: 'Window corner seat',
            status: 'Accepted'
          }
        ];
  });

  useEffect(() => {
    localStorage.setItem('ssc_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('ssc_orders', JSON.stringify(ordersList));
  }, [ordersList]);

  useEffect(() => {
    localStorage.setItem('ssc_bookings', JSON.stringify(bookingsList));
  }, [bookingsList]);

  useEffect(() => {
    localStorage.setItem('ssc_menu_items', JSON.stringify(menuItems));
  }, [menuItems]);

  useEffect(() => {
    localStorage.setItem('ssc_delivery_fee', deliveryFee.toString());
  }, [deliveryFee]);

  useEffect(() => {
    localStorage.setItem('ssc_restaurant_settings', JSON.stringify(restaurantSettings));
  }, [restaurantSettings]);

  useEffect(() => {
    localStorage.setItem('ssc_admin_password', adminPassword);
  }, [adminPassword]);

  const cartSubtotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cart]);

  const activeDeliveryCharge = orderType === 'delivery' ? (cart.length > 0 ? deliveryFee : 0) : 0;
  const cartTotal = cartSubtotal + activeDeliveryCharge;
  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (item) => {
    if (!item.available) {
      showToast(`${item.name} is currently out of stock.`, 'error');
      return;
    }
    if (item.price === null && !item.hasSizes) {
      showToast("Price coming soon. Please contact cafe on WhatsApp!", 'info');
      return;
    }

    let itemToAdd = { ...item };
    let cartItemId = item.id;
    let selectedSize = null;

    if (item.hasSizes) {
      selectedSize = pizzaSizes[item.id] || 'Small';
      itemToAdd.price = item.sizes[selectedSize];
      cartItemId = `${item.id}-${selectedSize}`;
    }

    setCart((prevCart) => {
      const existing = prevCart.find((ci) => ci.cartId === cartItemId);
      if (existing) {
        return prevCart.map((ci) =>
          ci.cartId === cartItemId ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      } else {
        return [
          ...prevCart,
          {
            ...itemToAdd,
            cartId: cartItemId,
            selectedSize,
            quantity: 1
          }
        ];
      }
    });

    showToast(`Added ${item.name} to cart!`);
    setCartDrawerOpen(true);
  };

  const handleUpdateQty = (cartId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.cartId === cartId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveFromCart = (cartId) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const dynamicUpiUri = useMemo(() => {
    const merchantUpi = restaurantSettings.upiId || '9534518551@ybl';
    const merchantName = encodeURIComponent('Shri Shyam Cafe');
    return `upi://pay?pa=${merchantUpi}&pn=${merchantName}&am=${cartTotal}&cu=INR&tn=Order%20Payment`;
  }, [cartTotal, restaurantSettings.upiId]);

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      showToast('Your cart is empty. Please add items first.', 'error');
      return;
    }

    if (!customerName.trim() || !customerPhone.trim()) {
      showToast('Please enter your name and mobile number.', 'error');
      return;
    }

    if (customerPhone.trim().length < 10) {
      showToast('Please enter a valid 10-digit mobile number.', 'error');
      return;
    }

    if (orderType === 'delivery' && !deliveryAddress.trim()) {
      showToast('Please provide a delivery address for Home Delivery.', 'error');
      return;
    }

    const orderNumber = `SSC${Math.floor(1000 + Math.random() * 9000)}`;
    const now = new Date();
    const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

    const newOrder = {
      orderId: orderNumber,
      date: formattedDate,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      orderType,
      items: cart.map((c) => ({
        name: c.name,
        size: c.selectedSize,
        price: c.price,
        qty: c.quantity
      })),
      subtotal: cartSubtotal,
      deliveryCharge: activeDeliveryCharge,
      total: cartTotal,
      paymentMethod: paymentMethod === 'upi' ? 'UPI / QR' : 'Cash on Delivery',
      paymentStatus: paymentMethod === 'upi' ? (upiRefId ? 'Submitted' : 'Pending') : 'Pending (COD)',
      upiRefId: upiRefId.trim() || 'N/A',
      deliveryAddress: orderType === 'delivery' ? deliveryAddress.trim() : 'Takeaway at Cafe Counter',
      landmark: landmark.trim(),
      specialInstructions: specialInstructions.trim(),
      status: 'Pending'
    };

    setOrdersList((prev) => [newOrder, ...prev]);
    setLastPlacedOrder(newOrder);
    setOrderConfirmedModal(true);
    setCart([]);
    setCartDrawerOpen(false);
  };

  const createWhatsAppOrderLink = (order) => {
    const rawPhone = restaurantSettings.phone.replace(/[^0-9]/g, '');
    const phoneNumber = rawPhone.length === 10 ? `91${rawPhone}` : rawPhone;

    let itemLines = order.items
      .map((it) => {
        const sizeStr = it.size ? ` (${it.size})` : '';
        return `• ${it.name}${sizeStr} x ${it.qty} – ₹${it.price * it.qty}`;
      })
      .join('\n');

    const message = `Hello Shri Shyam Cafe,
I would like to place an order.

Order No: #${order.orderId}
Customer Name: ${order.customerName}
Mobile: ${order.customerPhone}
Order Type: ${order.orderType === 'delivery' ? 'Home Delivery' : 'Takeaway (Pick up)'}

Items:
${itemLines}

Subtotal: ₹${order.subtotal}
Delivery Charge: ₹${order.deliveryCharge}
Total Payable: ₹${order.total}

Payment Method: ${order.paymentMethod}
${order.upiRefId !== 'N/A' ? `UPI Ref/UTR: ${order.upiRefId}` : ''}
${order.orderType === 'delivery' ? `Delivery Address: ${order.deliveryAddress}${order.landmark ? ` (Landmark: ${order.landmark})` : ''}` : ''}
${order.specialInstructions ? `Special Note: ${order.specialInstructions}` : ''}

Please confirm my order.`;

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.phone || !bookingForm.date || !bookingForm.time) {
      showToast('Please fill out all required reservation fields.', 'error');
      return;
    }

    const bookingRef = `TB-${Math.floor(100 + Math.random() * 900)}`;
    const newBooking = {
      bookingId: bookingRef,
      ...bookingForm,
      status: 'Pending'
    };

    setBookingsList((prev) => [newBooking, ...prev]);
    setBookingConfirmedModal(newBooking);
    setBookingForm({
      name: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      request: ''
    });
  };

  const createWhatsAppBookingLink = (booking) => {
    const rawPhone = restaurantSettings.phone.replace(/[^0-9]/g, '');
    const phoneNumber = rawPhone.length === 10 ? `91${rawPhone}` : rawPhone;
    const message = `Hello Shri Shyam Cafe,
I would like to reserve a table.

Booking Ref: #${booking.bookingId}
Name: ${booking.name}
Phone: ${booking.phone}
Date: ${booking.date}
Time: ${booking.time}
Guests: ${booking.guests} Person(s)
${booking.request ? `Special Request: ${booking.request}` : ''}

Please confirm my reservation.`;

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPinInput.trim() === adminPassword) {
      setIsAdminAuthenticated(true);
      setAdminAuthError('');
      showToast('Welcome, Cafe Owner! Admin unlocked.');
    } else {
      setAdminAuthError('Invalid Admin Password/PIN.');
    }
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    setPasswordChangeError('');
    setPasswordChangeSuccess('');

    if (currPasswordInput !== adminPassword) {
      setPasswordChangeError('Current password does not match.');
      return;
    }

    if (!newPasswordInput.trim() || newPasswordInput.length < 4) {
      setPasswordChangeError('New password must be at least 4 characters.');
      return;
    }

    if (newPasswordInput !== confirmPasswordInput) {
      setPasswordChangeError('New passwords do not match.');
      return;
    }

    setAdminPassword(newPasswordInput.trim());
    setCurrPasswordInput('');
    setNewPasswordInput('');
    setConfirmPasswordInput('');
    setPasswordChangeSuccess('Admin password changed successfully!');
    showToast('Admin password updated successfully!');
  };

  const handleUpdateDeliveryFee = (e) => {
    e.preventDefault();
    const val = Number(deliveryFeeInput);
    if (isNaN(val) || val < 0) {
      showToast('Please enter a valid positive delivery charge amount.', 'error');
      return;
    }
    setDeliveryFee(val);
    showToast(`Standard Delivery Charge updated to ₹${val}!`);
  };

  const handleToggleStock = (itemId) => {
    setMenuItems((prev) =>
      prev.map((it) => {
        if (it.id === itemId) {
          const updated = !it.available;
          showToast(`${it.name} is now ${updated ? 'In Stock' : 'Out of Stock'}`);
          return { ...it, available: updated };
        }
        return it;
      })
    );
  };

  const handleQuickPriceChange = (itemId, newPrice) => {
    const val = newPrice === '' ? null : Number(newPrice);
    setMenuItems((prev) =>
      prev.map((it) => (it.id === itemId ? { ...it, price: val } : it))
    );
  };

  const handleAddNewProductSubmit = (e) => {
    e.preventDefault();
    if (!newProductForm.name.trim()) {
      showToast('Product title is required', 'error');
      return;
    }

    const newId = `ssc-item-${Date.now()}`;
    let itemToInsert = {
      id: newId,
      name: newProductForm.name.trim(),
      category: newProductForm.category,
      description: newProductForm.description.trim() || 'Delicious freshly prepared item.',
      image: newProductForm.image.trim() || 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80',
      available: newProductForm.available,
      hasSizes: newProductForm.hasSizes
    };

    if (newProductForm.hasSizes) {
      itemToInsert.sizes = {
        Small: Number(newProductForm.smallPrice) || 50,
        Medium: Number(newProductForm.medPrice) || 100,
        Large: Number(newProductForm.largePrice) || 150
      };
      setPizzaSizes((prev) => ({ ...prev, [newId]: 'Small' }));
    } else {
      itemToInsert.price = newProductForm.price ? Number(newProductForm.price) : null;
      if (itemToInsert.price === null) {
        itemToInsert.priceNote = 'Price Coming Soon';
      }
    }

    setMenuItems((prev) => [itemToInsert, ...prev]);
    setIsAddProductModalOpen(false);
    showToast(`Added "${newProductForm.name}" to menu!`);
    setNewProductForm({
      name: '',
      category: 'Snacks',
      description: '',
      price: '',
      image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80',
      available: true,
      hasSizes: false,
      smallPrice: '',
      medPrice: '',
      largePrice: ''
    });
  };

  const handleEditProductSubmit = (e) => {
    e.preventDefault();
    if (!editingProduct) return;

    setMenuItems((prev) =>
      prev.map((item) => {
        if (item.id === editingProduct.id) {
          return {
            ...item,
            name: editingProduct.name,
            category: editingProduct.category,
            description: editingProduct.description,
            image: editingProduct.image,
            price: editingProduct.price !== '' ? Number(editingProduct.price) : null,
            available: editingProduct.available,
            sizes: editingProduct.hasSizes ? editingProduct.sizes : item.sizes
          };
        }
        return item;
      })
    );

    showToast(`Updated "${editingProduct.name}" details!`);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (itemId, name) => {
    if (window.confirm(`Are you sure you want to delete "${name}" from the menu?`)) {
      setMenuItems((prev) => prev.filter((it) => it.id !== itemId));
      showToast(`Deleted ${name} from menu.`);
    }
  };

  const displayedMenuItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [menuItems, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#fffaf0] text-[#24140e] flex flex-col font-sans selection:bg-[#f39c12] selection:text-white pb-20 md:pb-0">
      {toastMessage && (
        <div
          className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl shadow-xl text-white font-medium text-xs sm:text-sm transition-all ${
            toastMessage.type === 'error'
              ? 'bg-red-600'
              : toastMessage.type === 'info'
              ? 'bg-sky-600'
              : 'bg-emerald-600'
          }`}
        >
          {toastMessage.type === 'error' ? (
            <AlertCircle className="w-4 h-4" />
          ) : (
            <CheckCircle className="w-4 h-4" />
          )}
          <span>{toastMessage.msg}</span>
        </div>
      )}

      <div className="bg-[#1c100b] text-[#fef7ed] text-xs sm:text-sm py-1.5 px-4 text-center border-b border-[#3d2417] flex items-center justify-center gap-2">
        <span
          className={`inline-block w-2.5 h-2.5 rounded-full ${
            restaurantSettings.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-red-500'
          }`}
        ></span>
        <span className="font-medium">{restaurantSettings.address}</span>
        <span className="hidden md:inline text-amber-300 font-semibold">
          • Call / WhatsApp: {restaurantSettings.phone}
        </span>
        <span className="hidden sm:inline-block ml-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300">
          Delivery: ₹{deliveryFee}
        </span>
      </div>

      <header className="sticky top-0 z-40 bg-[#24140e]/95 backdrop-blur-md text-white border-b border-[#3d2417] shadow-lg transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#f39c12] to-[#d35400] flex items-center justify-center shadow-md shadow-amber-950/40 group-hover:scale-105 transition-transform">
              <Coffee className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1.5">
                Shri Shyam Cafe
              </h1>
              <p className="text-[11px] text-amber-200/90 font-medium tracking-wide">
                Fresh Fast Food & Delicious Coffee
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold tracking-wide">
            <button
              onClick={() => setActiveTab('home')}
              className={`hover:text-amber-400 transition-colors ${
                activeTab === 'home' ? 'text-amber-400 border-b-2 border-amber-400 pb-1' : 'text-neutral-200'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('menu')}
              className={`hover:text-amber-400 transition-colors ${
                activeTab === 'menu' ? 'text-amber-400 border-b-2 border-amber-400 pb-1' : 'text-neutral-200'
              }`}
            >
              Food Menu
            </button>
            <button
              onClick={() => setActiveTab('booking')}
              className={`hover:text-amber-400 transition-colors ${
                activeTab === 'booking' ? 'text-amber-400 border-b-2 border-amber-400 pb-1' : 'text-neutral-200'
              }`}
            >
              Table Booking
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`hover:text-amber-400 transition-colors ${
                activeTab === 'contact' ? 'text-amber-400 border-b-2 border-amber-400 pb-1' : 'text-neutral-200'
              }`}
            >
              Contact Us
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={`flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-full transition-all border ${
                activeTab === 'admin'
                  ? 'bg-amber-500 text-neutral-950 font-bold border-amber-400 shadow-md'
                  : 'bg-[#3d2417] text-amber-200 border-amber-900/60 hover:bg-amber-600 hover:text-white'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              Owner Admin
            </button>
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-4">
            <a
              href={`https://wa.me/917485869591?text=${encodeURIComponent(
                "Hello Shri Shyam Cafe, I would like to place an order / know today's specials!"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm px-3.5 py-2 rounded-xl shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              WhatsApp
            </a>

            <button
              onClick={() => setCartDrawerOpen(true)}
              className="relative p-2.5 bg-[#3d2417] hover:bg-[#4d3020] text-amber-300 rounded-xl transition-transform active:scale-90 border border-amber-900/40"
              aria-label="View shopping cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-bold h-5 w-5 rounded-full flex items-center justify-center ring-2 ring-[#24140e] animate-bounce">
                  {totalCartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-amber-400"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1c100b] border-t border-[#3d2417] px-5 py-4 space-y-3">
            <button
              onClick={() => {
                setActiveTab('home');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-white font-medium hover:text-amber-400"
            >
              Home
            </button>
            <button
              onClick={() => {
                setActiveTab('menu');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-white font-medium hover:text-amber-400"
            >
              Food Menu & Order Online
            </button>
            <button
              onClick={() => {
                setActiveTab('booking');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-white font-medium hover:text-amber-400"
            >
              Table Booking
            </button>
            <button
              onClick={() => {
                setActiveTab('contact');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-white font-medium hover:text-amber-400"
            >
              Contact & Location
            </button>
            <button
              onClick={() => {
                setActiveTab('admin');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-amber-300 font-bold hover:text-white"
            >
              Owner Admin Dashboard
            </button>
            <a
              href={`tel:${restaurantSettings.phone}`}
              className="flex items-center gap-2 py-2 text-emerald-400 font-semibold"
            >
              <Phone className="w-4 h-4" /> Call: {restaurantSettings.phone}
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <section className="relative bg-gradient-to-br from-[#24140e] via-[#331c12] to-[#1a0e08] text-white overflow-hidden py-14 sm:py-20 lg:py-28">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/40 rounded-full px-4 py-1.5 text-xs sm:text-sm text-amber-300 font-semibold backdrop-blur-sm">
                    <Truck className="w-4 h-4 text-amber-400" />
                    <span>Home Delivery Available – ₹{deliveryFee} Delivery Charge Extra</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                    Welcome to <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200">
                      Shri Shyam Cafe
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl text-neutral-300 font-medium max-w-2xl mx-auto lg:mx-0">
                    Delicious Food, Freshly Prepared, Served with Love!
                  </p>

                  <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-amber-200/90 bg-[#3a2014]/60 px-4 py-2 rounded-xl border border-amber-900/50 max-w-fit mx-auto lg:mx-0">
                    <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <span>{restaurantSettings.address}</span>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                    <button
                      onClick={() => setActiveTab('menu')}
                      className="px-7 py-3.5 bg-gradient-to-r from-[#e58e26] to-[#f39c12] hover:from-[#d35400] hover:to-[#e58e26] text-white font-bold rounded-2xl shadow-xl shadow-amber-950/50 flex items-center gap-2 transition-all"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      Order Now
                    </button>
                    <button
                      onClick={() => setActiveTab('booking')}
                      className="px-6 py-3.5 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-100 font-semibold rounded-2xl border border-neutral-700 backdrop-blur-md flex items-center gap-2 transition-all"
                    >
                      <Calendar className="w-5 h-5 text-amber-400" />
                      Book a Table
                    </button>
                    <a
                      href={`tel:${restaurantSettings.phone}`}
                      className="px-5 py-3.5 bg-emerald-600/30 hover:bg-emerald-600/40 text-emerald-300 font-medium rounded-2xl border border-emerald-500/30 flex items-center gap-2 transition-all"
                    >
                      <Phone className="w-4 h-4 text-emerald-400" />
                      Call Us
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative mx-auto max-w-md lg:max-w-none">
                    <div className="relative rounded-3xl overflow-hidden border-2 border-amber-600/40 shadow-2xl bg-[#24140e]">
                      <img
                        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
                        alt="Delicious Cafe Food"
                        className="w-full h-80 sm:h-96 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === 'menu' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-amber-700 font-bold text-xs uppercase tracking-widest">
                Fresh & Hot Everyday
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#24140e] mt-1 mb-3">
                Shri Shyam Cafe Food Menu
              </h2>
            </div>

            <div className="mb-8 space-y-4">
              <div className="relative max-w-md mx-auto">
                <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search momos, pizza, cold coffee, burger..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-neutral-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
                />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      selectedCategory === cat
                        ? 'bg-[#24140e] text-amber-300 shadow-md shadow-amber-950/20'
                        : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {displayedMenuItems.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-3xl overflow-hidden border border-amber-900/10 shadow-sm flex flex-col justify-between ${
                    !item.available ? 'opacity-75' : ''
                  }`}
                >
                  <div>
                    <div className="relative h-48 overflow-hidden bg-neutral-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold text-[#24140e]">{item.name}</h3>
                        <div className="text-right flex-shrink-0">
                          {item.hasSizes ? (
                            <div className="text-sm font-bold text-amber-800">
                              ₹{item.sizes[pizzaSizes[item.id] || 'Small']}
                            </div>
                          ) : item.price !== null ? (
                            <div className="text-lg font-black text-amber-800">
                              ₹{item.price}
                            </div>
                          ) : (
                            <span className="text-xs font-semibold px-2 py-1 bg-amber-100 text-amber-800 rounded-md">
                              {item.priceNote || 'Price Coming Soon'}
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {item.hasSizes && (
                        <div className="mb-4 bg-amber-50/60 p-2.5 rounded-2xl border border-amber-200/50">
                          <span className="text-[11px] font-bold text-amber-900 block mb-1.5">
                            Choose Pizza Size:
                          </span>
                          <div className="grid grid-cols-3 gap-1.5">
                            {['Small', 'Medium', 'Large'].map((sz) => (
                              <button
                                key={sz}
                                type="button"
                                onClick={() =>
                                  setPizzaSizes((prev) => ({ ...prev, [item.id]: sz }))
                                }
                                className={`py-1 text-xs font-bold rounded-xl transition-all ${
                                  (pizzaSizes[item.id] || 'Small') === sz
                                    ? 'bg-[#24140e] text-amber-300 shadow-sm'
                                    : 'bg-white text-neutral-700 border border-neutral-200'
                                }`}
                              >
                                {sz}
                                <span className="block text-[10px] font-normal text-amber-500">
                                  ₹{item.sizes[sz]}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <button
                      onClick={() => handleAddToCart(item)}
                      disabled={!item.available}
                      className={`w-full py-2.5 px-4 font-bold rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95 text-sm ${
                        item.available
                          ? 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white'
                          : 'bg-neutral-200 text-neutral-400 cursor-not-allowed shadow-none'
                      }`}
                    >
                      <ShoppingBag className="w-4 h-4" />
                      {item.available ? 'Add to Cart' : 'Currently Unavailable'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'booking' && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-3xl border border-amber-900/10 shadow-xl overflow-hidden">
              <div className="bg-[#24140e] text-white p-6 sm:p-10 text-center relative">
                <h2 className="text-2xl sm:text-3xl font-extrabold">Reserve a Cafe Table</h2>
              </div>
              <form onSubmit={handleBookingSubmit} className="p-6 sm:p-10 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-2xl shadow-lg flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Request Booking via WhatsApp
                </button>
              </form>
            </div>
          </section>
        )}

        {activeTab === 'contact' && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white p-8 rounded-3xl border border-amber-900/10 shadow-lg space-y-6">
              <h2 className="text-2xl font-black text-[#24140e]">Contact Information</h2>
              <p>Address: {restaurantSettings.address}</p>
              <p>Phone: {restaurantSettings.phone}</p>
              <p>Hours: {restaurantSettings.hours}</p>
            </div>
          </section>
        )}

        {activeTab === 'admin' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
            {!isAdminAuthenticated ? (
              <div className="max-w-md mx-auto bg-white p-8 rounded-3xl border border-amber-900/10 shadow-2xl text-center">
                <h2 className="text-2xl font-black text-[#24140e] mb-4">Owner Admin Login</h2>
                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <input
                    type="password"
                    placeholder="Enter Admin Password (Default: 1234)"
                    value={adminPinInput}
                    onChange={(e) => setAdminPinInput(e.target.value)}
                    className="w-full text-center tracking-widest text-lg font-bold px-4 py-3.5 bg-neutral-50 border border-neutral-300 rounded-2xl"
                  />
                  {adminAuthError && (
                    <div className="text-xs text-red-600">{adminAuthError}</div>
                  )}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#24140e] text-amber-300 font-bold rounded-2xl"
                  >
                    Login
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-3xl border border-neutral-200">
                <h2 className="text-xl font-bold mb-4">Orders & Bookings</h2>
                <div className="flex gap-4 mb-4">
                  <button
                    onClick={() => setAdminSubTab('orders')}
                    className={`px-4 py-2 rounded-xl text-sm font-bold ${
                      adminSubTab === 'orders' ? 'bg-[#24140e] text-amber-300' : 'bg-neutral-100'
                    }`}
                  >
                    Orders
                  </button>
                  <button
                    onClick={() => setAdminSubTab('bookings')}
                    className={`px-4 py-2 rounded-xl text-sm font-bold ${
                      adminSubTab === 'bookings' ? 'bg-[#24140e] text-amber-300' : 'bg-neutral-100'
                    }`}
                  >
                    Table Bookings
                  </button>
                  <button
                    onClick={() => setIsAdminAuthenticated(false)}
                    className="ml-auto px-3 py-1 bg-red-600 text-white rounded-lg text-xs"
                  >
                    Logout
                  </button>
                </div>
                {adminSubTab === 'orders' && (
                  <div>
                    {ordersList.map((o) => (
                      <div key={o.orderId} className="border-b py-2 flex justify-between">
                        <span>#{o.orderId} - {o.customerName} (₹{o.total})</span>
                        <span className="font-bold">{o.status}</span>
                      </div>
                    ))}
                  </div>
                )}
                {adminSubTab === 'bookings' && (
                  <div>
                    {bookingsList.map((b) => (
                      <div key={b.bookingId} className="border-b py-2 flex justify-between">
                        <span>#{b.bookingId} - {b.name} ({b.date} at {b.time})</span>
                        <span className="font-bold">{b.status}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </section>
        )}
      </main>

      {/* Cart Drawer */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            onClick={() => setCartDrawerOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white p-5 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg">Your Cart</h3>
                  <button onClick={() => setCartDrawerOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                {cart.map((item) => (
                  <div key={item.cartId} className="flex justify-between items-center py-2 border-b">
                    <div>
                      <div className="font-bold text-sm">{item.name}</div>
                      <div className="text-xs text-neutral-500">₹{item.price} x {item.quantity}</div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <button onClick={() => handleUpdateQty(item.cartId, -1)} className="px-2 bg-neutral-200 rounded">-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleUpdateQty(item.cartId, 1)} className="px-2 bg-neutral-200 rounded">+</button>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex justify-between font-bold mb-4">
                  <span>Total</span>
                  <span>₹{cartTotal}</span>
                </div>
                <button
                  onClick={handlePlaceOrder}
                  className="w-full py-3 bg-[#24140e] text-amber-300 font-bold rounded-xl"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

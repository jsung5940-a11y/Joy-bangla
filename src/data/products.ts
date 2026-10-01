import { Product, RepairService, RepairTicket, PCPartItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_gaming_setup_1790839910844.jpg';
export const GAMING_PC_IMAGE = '/src/assets/images/product_gaming_pc_1790839930150.jpg';
export const CURVED_MONITOR_IMAGE = '/src/assets/images/product_curved_monitor_1790839944023.jpg';
export const NVME_SSD_IMAGE = '/src/assets/images/product_nvme_ssd_1790839959394.jpg';
export const HDD_DRIVE_IMAGE = '/src/assets/images/product_hdd_drive_1790839975088.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-pc-1',
    name: 'Joy Bangla THBRNE Apex Gaming PC',
    brand: 'Joy Bangla Custom',
    category: 'gaming-pc',
    priceUSD: 1899,
    priceBDT: 208890,
    originalPriceUSD: 2199,
    originalPriceBDT: 241890,
    image: GAMING_PC_IMAGE,
    badge: 'HOT DEAL',
    specs: 'AMD Ryzen 7 7800X3D, RTX 4070 Super 12GB, 32GB DDR5 6000MHz, 1TB Gen4 NVMe SSD',
    detailedSpecs: {
      'Processor': 'AMD Ryzen 7 7800X3D (8 cores, 16 threads, up to 5.0GHz)',
      'Graphics Card': 'NVIDIA GeForce RTX 4070 Super 12GB GDDR6X',
      'Motherboard': 'ASUS ROG Strix B650-A Gaming WiFi',
      'RAM': '32GB (2x16GB) Corsair Vengeance RGB DDR5-6000 CL30',
      'Storage': '1TB Samsung 990 EVO PCIe 4.0 NVMe M.2',
      'Power Supply': 'Corsair RM850e 850W 80+ Gold Fully Modular',
      'Cooling': 'NZXT Kraken Elite 360 RGB Liquid Cooler',
      'Chassis': 'Lian Li O11 Dynamic EVO RGB Dual Chamber'
    },
    rating: 4.9,
    reviewsCount: 142,
    inStock: true,
    warranty: '3 Years Official Warranty + Lifetime Labor Support',
    description: 'Engineered for competitive 1440p and 4K ultra gaming, fluid streaming, and 3D rendering. Tuned by Joy Bangla master technicians with optimized thermal profiles.'
  },
  {
    id: 'prod-mon-1',
    name: 'Aorus 34" WQHD Curved Gaming Monitor',
    brand: 'AORUS',
    category: 'monitors',
    priceUSD: 749,
    priceBDT: 82390,
    originalPriceUSD: 849,
    originalPriceBDT: 93390,
    image: CURVED_MONITOR_IMAGE,
    badge: '165Hz · 1ms',
    specs: '34" Ultrawide (3440 x 1440), 165Hz, 1ms MPRT, 1500R Curvature, HDR400, FreeSync Premium',
    detailedSpecs: {
      'Screen Size': '34 Inch Ultrawide 21:9',
      'Panel Type': 'VA Fast Curve 1500R',
      'Resolution': '3440 x 1440 (UWQHD)',
      'Refresh Rate': '165Hz',
      'Response Time': '1ms (MPRT)',
      'Color Gamut': '90% DCI-P3 / 117% sRGB',
      'Connectivity': '2x HDMI 2.0, 2x DisplayPort 1.4, USB Hub',
      'Ergonomics': 'Height, Tilt & Swivel Adjustable'
    },
    rating: 4.8,
    reviewsCount: 88,
    inStock: true,
    warranty: '3 Years Replacement Warranty',
    description: 'Immerse your vision in hyper-realistic battlefield environments with fluid 165Hz refresh rates and vibrant quantum dot color fidelity.'
  },
  {
    id: 'prod-ssd-1',
    name: 'Samsung 990 PRO NVMe SSD 2TB',
    brand: 'Samsung',
    category: 'ssd',
    priceUSD: 169,
    priceBDT: 18590,
    originalPriceUSD: 199,
    originalPriceBDT: 21890,
    image: NVME_SSD_IMAGE,
    badge: '7450 MB/s',
    specs: 'PCIe Gen 4.0 x4 M.2 2280, Up to 7450 MB/s Read, 6900 MB/s Write, Smart Thermal Control',
    detailedSpecs: {
      'Capacity': '2,000 GB (2TB)',
      'Form Factor': 'M.2 (2280)',
      'Interface': 'PCIe Gen 4.0 x4, NVMe 2.0',
      'Sequential Read': 'Up to 7,450 MB/s',
      'Sequential Write': 'Up to 6,900 MB/s',
      'Cache Memory': 'Samsung 2GB Low Power DDR4 SDRAM',
      'TBW Rating': '1200 TBW',
      'Heatsink': 'Nickel-coated controller & heat spreader label'
    },
    rating: 5.0,
    reviewsCount: 312,
    inStock: true,
    warranty: '5 Years Manufacturer Warranty',
    description: 'The definitive storage drive for hardcore gaming and heavy 4K/8K video timeline editing with best-in-class power efficiency and endurance.'
  },
  {
    id: 'prod-hdd-1',
    name: 'WD Black Performance Gaming HDD 4TB',
    brand: 'Western Digital',
    category: 'hdd',
    priceUSD: 129,
    priceBDT: 14190,
    originalPriceUSD: 149,
    originalPriceBDT: 16390,
    image: HDD_DRIVE_IMAGE,
    badge: '7200 RPM',
    specs: '3.5" SATA 6 Gb/s, 7200 RPM, 256MB Cache, StableTrac Technology, Dual-Core Processor',
    detailedSpecs: {
      'Capacity': '4TB (4000 GB)',
      'Form Factor': '3.5 Inch Internal',
      'Rotational Speed': '7200 RPM',
      'Buffer Cache': '256 MB',
      'Interface': 'SATA 6 Gb/s',
      'Vibration Protection': 'Rotational Vibration (RV) sensors',
      'Weight': '715g'
    },
    rating: 4.7,
    reviewsCount: 204,
    inStock: true,
    warranty: '5 Years Limited Warranty',
    description: 'Heavyweight capacity for your entire steam library, video archives, and backup arrays with relentless durability and dual-stage actuators.'
  },
  {
    id: 'prod-pc-2',
    name: 'Joy Bangla Cyber Titan RTX 4090 Monster',
    brand: 'Joy Bangla Custom',
    category: 'gaming-pc',
    priceUSD: 3499,
    priceBDT: 384890,
    originalPriceUSD: 3899,
    originalPriceBDT: 428890,
    image: GAMING_PC_IMAGE,
    badge: 'BEAST EDITION',
    specs: 'Intel Core i9-14900K, RTX 4090 24GB, 64GB DDR5 6400MHz, 2TB Gen4 SSD + 4TB HDD',
    detailedSpecs: {
      'Processor': 'Intel Core i9-14900K (24 cores, 32 threads, up to 6.0GHz)',
      'Graphics Card': 'ASUS ROG Matrix GeForce RTX 4090 24GB GDDR6X',
      'Motherboard': 'MSI MEG Z790 GODLIKE MAX',
      'RAM': '64GB (2x32GB) G.Skill Trident Z5 RGB DDR5-6400',
      'Storage': '2TB WD Black SN850X + 4TB WD Black 7200RPM HDD',
      'Power Supply': 'Seasonic Vertex GX-1200 1200W ATX 3.0',
      'Cooling': 'Custom Hard-tube Liquid Loop with Red & Cyan Coolant'
    },
    rating: 5.0,
    reviewsCount: 64,
    inStock: true,
    warranty: '3 Years Full Hardware Warranty + On-Site Support',
    description: 'Uncompromising ultimate performance monster built for ultra 4K Ray-Tracing, generative AI workflows, Unreal Engine 5 rendering, and competitive esports.'
  },
  {
    id: 'prod-mon-2',
    name: 'ASUS ROG Swift OLED 27" 240Hz Gaming Display',
    brand: 'ASUS ROG',
    category: 'monitors',
    priceUSD: 899,
    priceBDT: 98890,
    originalPriceUSD: 999,
    originalPriceBDT: 109890,
    image: CURVED_MONITOR_IMAGE,
    badge: 'OLED 240Hz · 0.03ms',
    specs: '27" QHD (2560x1440) OLED, 240Hz, 0.03ms GTG, G-SYNC Compatible, Custom Heatsink',
    detailedSpecs: {
      'Screen Size': '26.5 Inch OLED',
      'Resolution': '2560 x 1440 (2K QHD)',
      'Refresh Rate': '240Hz',
      'Response Time': '0.03ms (Gray to Gray)',
      'Contrast Ratio': '1,500,000:1 (True Black)',
      'Color Accuracy': '99% DCI-P3, Delta E < 2',
      'Brightness': '1000 nits Peak (3% window)'
    },
    rating: 4.9,
    reviewsCount: 119,
    inStock: true,
    warranty: '3 Years OLED Burn-in Warranty',
    description: 'Instant response times, pure infinite contrast blacks, and blistering 240Hz refresh rate make this display the undisputed esports champion.'
  },
  {
    id: 'prod-ssd-2',
    name: 'Kingston KC3000 PCIe 4.0 NVMe SSD 1TB',
    brand: 'Kingston',
    category: 'ssd',
    priceUSD: 99,
    priceBDT: 10890,
    originalPriceUSD: 119,
    originalPriceBDT: 13090,
    image: NVME_SSD_IMAGE,
    badge: '7000 MB/s',
    specs: 'M.2 2280, 7000MB/s Read, 6000MB/s Write, Graphene Aluminum Heat Spreader',
    detailedSpecs: {
      'Capacity': '1,024 GB (1TB)',
      'Controller': 'Phison PS5018-E18',
      'NAND Type': '3D TLC',
      'Endurance': '800 TBW'
    },
    rating: 4.8,
    reviewsCount: 95,
    inStock: true,
    warranty: '5 Years Warranty',
    description: 'High performance PCIe Gen 4x4 speed for power users who demand lightning quick Windows boot times and instant game loading.'
  },
  {
    id: 'prod-hdd-2',
    name: 'Seagate IronWolf Pro 8TB Enterprise NAS HDD',
    brand: 'Seagate',
    category: 'hdd',
    priceUSD: 219,
    priceBDT: 24090,
    originalPriceUSD: 249,
    originalPriceBDT: 27390,
    image: HDD_DRIVE_IMAGE,
    badge: '8TB WORKHORSE',
    specs: '3.5" CMR Drive, 7200 RPM, 256MB Cache, 300TB/year Workload, AgileArray Firmware',
    detailedSpecs: {
      'Capacity': '8TB (8000 GB)',
      'Technology': 'Conventional Magnetic Recording (CMR)',
      'Workload Limit': '300 TB/year',
      'MTBF': '1,200,000 Hours'
    },
    rating: 4.9,
    reviewsCount: 78,
    inStock: true,
    warranty: '5 Years Warranty + 3 Years Rescue Data Recovery',
    description: 'Built for 24/7 continuous operation, RAID arrays, massive 8K video footage storage, and dependable zero-downtime reliability.'
  }
];

export const REPAIR_SERVICES: RepairService[] = [
  {
    id: 'repair-pc',
    deviceType: 'pc',
    title: 'PC & Laptop Chip-Level Repair',
    subtitle: 'Motherboard soldering, GPU re-balling, thermal overhaul & power fault fixes',
    iconName: 'Cpu',
    description: 'Our certified electronics engineers diagnose motherboard short-circuits, blown MOSFETs, failing VRMs, and noisy power lines with micro-soldering precision under stereo microscopes.',
    turnaroundTime: '24–48 Hours',
    basePriceUSD: 45,
    basePriceBDT: 4950,
    commonIssues: [
      { issue: 'No Power / Dead System', description: 'Power circuit repair, capacitor replacement, short-circuit clearing', extraCostUSD: 25, extraCostBDT: 2750 },
      { issue: 'No Display / GPU Artifacting', description: 'PCIe lane diagnostic, VRAM chip repair, thermal pad replacement', extraCostUSD: 40, extraCostBDT: 4400 },
      { issue: 'Random BSOD / Boot Loops', description: 'BIOS reprogramming via SPI programmer, memory trace repair', extraCostUSD: 20, extraCostBDT: 2200 },
      { issue: 'Severe Overheating & Thermal Throttling', description: 'Deep ultrasonic fan cleaning, Honeywell PTM7950 phase-change repasting', extraCostUSD: 15, extraCostBDT: 1650 }
    ],
    repairProcess: [
      '30-point electronic diagnostic & thermal camera inspection',
      'Customer quote approval & parts sourcing',
      'Clean micro-soldering & ultrasonic ultrasonic bath',
      '8-hour Furmark & AIDA64 stability torture test',
      'Return with 90-day warranty certificate'
    ]
  },
  {
    id: 'repair-monitor',
    deviceType: 'monitor',
    title: 'Gaming & Studio Monitor Repair',
    subtitle: 'Panel line fixes, backlight LED arrays, power supply & port replacements',
    iconName: 'Monitor',
    description: 'Don’t throw away expensive gaming monitors! We repair power boards, replace burnt LED edge-lit and mini-LED backlights, fix vertical colored lines, and replace broken HDMI 2.1 / DP ports.',
    turnaroundTime: '24–48 Hours',
    basePriceUSD: 35,
    basePriceBDT: 3850,
    commonIssues: [
      { issue: 'Black Screen with Sound / Dim Image', description: 'Burnt LED strip backlight replacement with OEM Samsung/LG arrays', extraCostUSD: 30, extraCostBDT: 3300 },
      { issue: 'Won’t Turn On / Blinking Power LED', description: 'Internal switch-mode power board (SMPS) rebuild & high-grade capacitor recap', extraCostUSD: 25, extraCostBDT: 2750 },
      { issue: 'Broken HDMI / DisplayPort Socket', description: 'Micro-soldering of high-bandwidth HDMI 2.1 / DP 1.4 receptacle', extraCostUSD: 20, extraCostBDT: 2200 },
      { issue: 'Horizontal / Vertical Color Lines', description: 'T-CON timing controller replacement and COF bonding tab rework', extraCostUSD: 45, extraCostBDT: 4950 }
    ],
    repairProcess: [
      'Luminance & signal test with oscilloscope',
      'Disassembly in static-safe clean zone',
      'Direct component replacement with original manufacturer parts',
      '24-hour color calibration & burn-in test',
      'Safe courier packaging or local pickup'
    ]
  },
  {
    id: 'repair-ssd',
    deviceType: 'ssd',
    title: 'SSD Repair & NAND Data Recovery',
    subtitle: 'Corrupted firmware flash, dead controller revival & chip-off data rescue',
    iconName: 'HardDrive',
    description: 'When your M.2 NVMe or SATA SSD locks up, shows 0MB size, or disappears from BIOS, our specialized data lab recovers your critical files and repairs salvageable flash controllers.',
    turnaroundTime: '12–36 Hours (Emergency available)',
    basePriceUSD: 50,
    basePriceBDT: 5500,
    commonIssues: [
      { issue: 'SSD Disappeared from BIOS / Not Detected', description: 'Controller power management PMIC repair or shorted coupling caps', extraCostUSD: 35, extraCostBDT: 3850 },
      { issue: 'Read-Only Locked / 0MB Capacity Error', description: 'Firmware translation table rebuild with PC-3000 Flash station', extraCostUSD: 45, extraCostBDT: 4950 },
      { issue: 'Physical Damage / Bent PCB', description: 'Trace jumper soldering & PCIe connector tab restoration', extraCostUSD: 30, extraCostBDT: 3300 },
      { issue: 'Critical File Recovery / Photo & Project Rescue', description: 'Chip-off NAND desoldering and raw bit extraction', extraCostUSD: 60, extraCostBDT: 6600 }
    ],
    repairProcess: [
      'Non-destructive write-blocked diagnostic',
      'ROM chip read & hardware protocol negotiation',
      'Direct bitstream image capture to certified safe storage',
      'Data verification & customer preview',
      'Encrypted delivery on new SSD or secure cloud transfer'
    ]
  },
  {
    id: 'repair-hdd',
    deviceType: 'hdd',
    title: 'Mechanical HDD Repair & Clean-Room Recovery',
    subtitle: 'Clicking heads, seized spindle motor, PCB burnout & platter transfers',
    iconName: 'Disc',
    description: 'Hearing the dreaded "click of death"? We operate an ISO-5 Class 100 clean-room bench to replace read/write head assemblies, unseize bearings, and clone dying magnetic sectors.',
    turnaroundTime: '24–72 Hours',
    basePriceUSD: 40,
    basePriceBDT: 4400,
    commonIssues: [
      { issue: 'Repetitive Clicking / Beeping Sound', description: 'Donor read/write head assembly replacement in Class 100 Clean-Room', extraCostUSD: 55, extraCostBDT: 6050 },
      { issue: 'Burnt PCB / Smell of Smoke', description: 'PCB swap, TVS protection diode removal & BIOS chip transplant', extraCostUSD: 25, extraCostBDT: 2750 },
      { issue: 'Freezing Windows / Heavy Bad Sectors', description: 'Hardware-level slow-read sector imaging with hardware reset', extraCostUSD: 35, extraCostBDT: 3850 },
      { issue: 'Dropped External Hard Drive', description: 'Parking ramp realignment and head comb unsticking', extraCostUSD: 45, extraCostBDT: 4950 }
    ],
    repairProcess: [
      'Acoustic & magnetic diagnostic without damaging platters',
      'Class 100 clean-room platter inspection',
      'Microscopic donor head installation with alignment tools',
      'Sector-by-sector clone to healthy media',
      'Delivery of recovered folders and structural validation'
    ]
  }
];

export const SAMPLE_REPAIR_TICKETS: Record<string, RepairTicket> = {
  'JB-8842': {
    ticketNumber: 'JB-8842',
    customerName: 'Tanvir Ahmed',
    deviceType: 'pc',
    deviceName: 'Custom Gaming Rig (Ryzen 7 5800X / RTX 3080)',
    issueDescription: 'Black screen on boot, GPU fans spin 100%, 1 long 2 short beeps from motherboard.',
    currentStep: 4,
    steps: [
      { title: 'Device Intake & Inspection', desc: 'Received at Dhaka Lab, initial condition cataloged.', completed: true, date: 'Oct 01, 09:30 AM' },
      { title: 'Electronic Diagnostics', desc: 'Isolated shorted 12V high-side MOSFET on PCIe power stage.', completed: true, date: 'Oct 01, 11:15 AM' },
      { title: 'Chip Soldering & Repair', desc: 'Replaced Alpha & Omega MOSFET pair, cleaned thermal compound.', completed: true, date: 'Oct 01, 02:40 PM' },
      { title: 'Stress & Stability Testing', desc: 'Running 3DMark Time Spy loop + MemTest86 (In Progress - 92% passed).', completed: true, date: 'Oct 01, 04:30 PM' },
      { title: 'Ready for Collection', desc: 'Packaging with 90-day guarantee and diagnostic report.', completed: false, date: 'Estimated: Oct 02, 10:00 AM' }
    ],
    serviceFeeUSD: 65,
    serviceFeeBDT: 7150,
    estimatedCompletion: 'Tomorrow at 10:00 AM',
    technician: 'Engr. Rakibul Hasan (Senior Electronics Specialist)'
  },
  'JB-9011': {
    ticketNumber: 'JB-9011',
    customerName: 'Shakib Chowdhury',
    deviceType: 'ssd',
    deviceName: 'Samsung 980 PRO 1TB M.2 NVMe',
    issueDescription: 'BIOS does not recognize drive. Contains university thesis and game projects.',
    currentStep: 3,
    steps: [
      { title: 'Device Intake & Inspection', desc: 'Secure write-block log created.', completed: true, date: 'Sep 30, 04:00 PM' },
      { title: 'Firmware & Controller Analysis', desc: 'Elpis controller translator desynchronization detected.', completed: true, date: 'Oct 01, 10:00 AM' },
      { title: 'Firmware Rebuild & NAND Dump', desc: 'Rebuilding translation tables on PC-3000 Flash (Active).', completed: true, date: 'Oct 01, 01:20 PM' },
      { title: 'Data Integrity Verification', desc: 'MD5 checksum check on recovered files.', completed: false, date: 'Pending' },
      { title: 'Ready for Collection', desc: 'Files ready on encrypted thumbdrive.', completed: false, date: 'Estimated: Oct 02, 02:00 PM' }
    ],
    serviceFeeUSD: 85,
    serviceFeeBDT: 9350,
    estimatedCompletion: 'Oct 02 at 02:00 PM',
    technician: 'Engr. Joydev Sarker (Storage Recovery Specialist)'
  },
  'JB-7719': {
    ticketNumber: 'JB-7719',
    customerName: 'Ayesha Rahman',
    deviceType: 'monitor',
    deviceName: 'LG UltraGear 27GN850 144Hz Monitor',
    issueDescription: 'Screen flickers with red vertical lines across left quadrant.',
    currentStep: 5,
    steps: [
      { title: 'Device Intake & Inspection', desc: 'Intake photo verification complete.', completed: true, date: 'Sep 29, 11:00 AM' },
      { title: 'Panel Diagnostic', desc: 'Faulty COF (Chip on Film) bonding tab trace identified.', completed: true, date: 'Sep 29, 02:30 PM' },
      { title: 'Laser COF Re-bonding', desc: 'Precision pulse heating tab re-bond completed.', completed: true, date: 'Sep 30, 01:15 PM' },
      { title: '24-Hour Color Burn-in', desc: 'Zero flickering, 144Hz signal verified.', completed: true, date: 'Oct 01, 09:00 AM' },
      { title: 'Ready for Collection', desc: 'Packaged in antistatic bubble wrap ready at front desk.', completed: true, date: 'Oct 01, 11:00 AM' }
    ],
    serviceFeeUSD: 55,
    serviceFeeBDT: 6050,
    estimatedCompletion: 'Ready for Pickup Now!',
    technician: 'Engr. Masum Billah (Display Engineer)'
  }
};

export const PC_BUILDER_PARTS: PCPartItem[] = [
  // CPUs
  { id: 'part-cpu-1', category: 'cpu', categoryLabel: 'Processor', name: 'AMD Ryzen 7 7800X3D', spec: '8 Cores, 16 Threads, 5.0 GHz Max Boost', priceUSD: 399, priceBDT: 43890, wattage: 120, brand: 'AMD' },
  { id: 'part-cpu-2', category: 'cpu', categoryLabel: 'Processor', name: 'Intel Core i7-14700K', spec: '20 Cores, 28 Threads, 5.6 GHz Max Boost', priceUSD: 419, priceBDT: 46090, wattage: 250, brand: 'Intel' },
  { id: 'part-cpu-3', category: 'cpu', categoryLabel: 'Processor', name: 'AMD Ryzen 5 7600X', spec: '6 Cores, 12 Threads, 5.3 GHz Boost', priceUSD: 219, priceBDT: 24090, wattage: 105, brand: 'AMD' },

  // Motherboards
  { id: 'part-mb-1', category: 'motherboard', categoryLabel: 'Motherboard', name: 'ASUS ROG STRIX B650-A Gaming WiFi', spec: 'PCIe 5.0, WiFi 6E, 2.5Gb LAN, 12+2 Power Stages', priceUSD: 239, priceBDT: 26290, wattage: 50, brand: 'ASUS' },
  { id: 'part-mb-2', category: 'motherboard', categoryLabel: 'Motherboard', name: 'MSI MAG Z790 TOMAHAWK WIFI', spec: 'DDR5, PCIe 5.0 x16, 4x M.2 Slots', priceUSD: 269, priceBDT: 29590, wattage: 55, brand: 'MSI' },

  // GPUs
  { id: 'part-gpu-1', category: 'gpu', categoryLabel: 'Graphics Card', name: 'NVIDIA GeForce RTX 4070 Super 12GB', spec: 'GDDR6X, DLSS 3.5, 3rd Gen RT Cores', priceUSD: 599, priceBDT: 65890, wattage: 220, brand: 'NVIDIA' },
  { id: 'part-gpu-2', category: 'gpu', categoryLabel: 'Graphics Card', name: 'NVIDIA GeForce RTX 4080 Super 16GB', spec: '10240 CUDA Cores, 4K High Refresh Esports', priceUSD: 999, priceBDT: 109890, wattage: 320, brand: 'NVIDIA' },
  { id: 'part-gpu-3', category: 'gpu', categoryLabel: 'Graphics Card', name: 'AMD Radeon RX 7800 XT 16GB', spec: '16GB GDDR6, RDNA 3, Infinity Cache', priceUSD: 499, priceBDT: 54890, wattage: 260, brand: 'AMD' },

  // RAM
  { id: 'part-ram-1', category: 'ram', categoryLabel: 'Memory (RAM)', name: 'Corsair Vengeance RGB 32GB (2x16GB)', spec: 'DDR5-6000MHz CL30 AMD EXPO / XMP 3.0', priceUSD: 129, priceBDT: 14190, wattage: 15, brand: 'Corsair' },
  { id: 'part-ram-2', category: 'ram', categoryLabel: 'Memory (RAM)', name: 'G.Skill Trident Z5 Neo RGB 64GB (2x32GB)', spec: 'DDR5-6000MHz Low Latency Dual Channel', priceUSD: 219, priceBDT: 24090, wattage: 20, brand: 'G.Skill' },

  // SSDs
  { id: 'part-ssd-1', category: 'ssd', categoryLabel: 'Primary SSD Storage', name: 'Samsung 990 PRO NVMe SSD 2TB', spec: 'PCIe 4.0 x4, 7450 MB/s Read, Heatsink', priceUSD: 169, priceBDT: 18590, wattage: 10, brand: 'Samsung' },
  { id: 'part-ssd-2', category: 'ssd', categoryLabel: 'Primary SSD Storage', name: 'Kingston KC3000 NVMe SSD 1TB', spec: 'PCIe 4.0 x4, 7000 MB/s Read', priceUSD: 99, priceBDT: 10890, wattage: 8, brand: 'Kingston' },

  // HDDs
  { id: 'part-hdd-1', category: 'hdd', categoryLabel: 'Secondary HDD Storage', name: 'WD Black Performance HDD 4TB', spec: '7200 RPM, 256MB Cache SATA 6Gb/s', priceUSD: 129, priceBDT: 14190, wattage: 12, brand: 'Western Digital' },
  { id: 'part-hdd-2', category: 'hdd', categoryLabel: 'Secondary HDD Storage', name: 'Seagate IronWolf 8TB NAS HDD', spec: 'CMR, 7200 RPM, 256MB Cache', priceUSD: 219, priceBDT: 24090, wattage: 15, brand: 'Seagate' },

  // Power Supplies
  { id: 'part-psu-1', category: 'psu', categoryLabel: 'Power Supply (PSU)', name: 'Corsair RM850e 850W 80+ Gold', spec: 'Fully Modular, ATX 3.0 & PCIe 5.0 Ready', priceUSD: 129, priceBDT: 14190, wattage: 0, brand: 'Corsair' },
  { id: 'part-psu-2', category: 'psu', categoryLabel: 'Power Supply (PSU)', name: 'Seasonic Focus GX-1000 1000W 80+ Gold', spec: 'Full Modular, 10 Years Warranty, Japanese Caps', priceUSD: 179, priceBDT: 19690, wattage: 0, brand: 'Seasonic' },

  // Cases
  { id: 'part-case-1', category: 'case', categoryLabel: 'Chassis & Case', name: 'Lian Li O11 Dynamic EVO RGB Glass', spec: 'Dual Chamber, Panoramic Glass, ARGB Strip', priceUSD: 159, priceBDT: 17490, wattage: 10, brand: 'Lian Li' },
  { id: 'part-case-2', category: 'case', categoryLabel: 'Chassis & Case', name: 'NZXT H9 Flow Dual-Chamber Mid-Tower', spec: 'High Airflow Perforated Panels, 4x 120mm Fans', priceUSD: 169, priceBDT: 18590, wattage: 10, brand: 'NZXT' },

  // Monitors
  { id: 'part-mon-1', category: 'monitor', categoryLabel: 'Display Monitor', name: 'Aorus 34" Curved WQHD 165Hz Monitor', spec: '3440x1440 UWQHD, 1500R Curve, HDR400', priceUSD: 749, priceBDT: 82390, wattage: 65, brand: 'AORUS' },
  { id: 'part-mon-2', category: 'monitor', categoryLabel: 'Display Monitor', name: 'ASUS ROG Swift OLED 27" 240Hz', spec: '2560x1440 OLED 240Hz 0.03ms GTG', priceUSD: 899, priceBDT: 98890, wattage: 50, brand: 'ASUS' }
];

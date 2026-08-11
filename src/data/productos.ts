import type { Producto } from '../context/cart'

export const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Apple MacBook Air M3',
    descripcion: 'Laptop ultraligera con chip Apple M3, pantalla Liquid Retina de 13.6" y 16 GB de RAM.',
    precio: 1499.99,
    imagen: '/productos/mac.jpeg',
    pagoUrl: 'https://buy.stripe.com/test_7sY3cv4Eh0p267dehDeUU00',
    variantes: [
      { nombre: 'Color', opciones: ['Medio Noche', 'Plata', 'Starlight'] },
      { nombre: 'Almacenamiento', opciones: ['256 GB', '512 GB', '1 TB'] },
    ],
  },
  {
    id: 2,
    nombre: 'Samsung Galaxy S25 Ultra',
    descripcion: 'Smartphone premium con pantalla AMOLED de 6.9", cámara de 200 MP y 512 GB de almacenamiento.',
    precio: 1299.99,
    imagen: '/productos/Samsung Galaxy S25 Ultra.jpeg',
    pagoUrl: 'https://buy.stripe.com/test_aFa00jgmZ2xadzF2yVeUU01',
    variantes: [
      { nombre: 'Color', opciones: ['Titanio Negro', 'Titanio Gris', 'Titanio Plata'] },
      { nombre: 'Almacenamiento', opciones: ['256 GB', '512 GB', '1 TB'] },
    ],
  },
  {
    id: 3,
    nombre: 'LG UltraGear 27GR95QE',
    descripcion: 'Monitor OLED de 27 pulgadas con resolución QHD, tasa de refresco de 240 Hz y tiempo de respuesta de 0.03 ms.',
    precio: 899.99,
    imagen: '/productos/LG 27_ Ultragear™ OLED QHD Gaming Monitor with 240Hz _03ms GtG & nVIDIA® G-SYNC® Compatible.jpeg',
    pagoUrl: 'https://buy.stripe.com/test_00wcN55Il9ZC539ehDeUU02',
    variantes: [{ nombre: 'Tamaño', opciones: ['27 pulgadas', '34 pulgadas'] }],
  },
  {
    id: 4,
    nombre: 'Logitech G Pro X TKL',
    descripcion: 'Teclado mecánico inalámbrico con iluminación RGB y switches GX para alto rendimiento.',
    precio: 199.99,
    imagen: '/productos/Logitech G Teclado PRO X TKL RAPID Gaming in Negro, Danés_Noruego_Sueco_Finlandés (QWERTY).jpeg',
    pagoUrl: 'https://buy.stripe.com/test_9B6dR9eeR5Jm9jp8XjeUU03',
    variantes: [{ nombre: 'Switch', opciones: ['Lineal', 'Táctil', 'Click'] }],
  },
  {
    id: 5,
    nombre: 'Razer DeathAdder V3 Pro',
    descripcion: 'Mouse inalámbrico ergonómico con sensor Focus Pro de 30,000 DPI y batería de larga duración.',
    precio: 149.99,
    imagen: '/productos/Razer Viper V3 Pro.jpeg',
    pagoUrl: 'https://buy.stripe.com/test_aFafZh3AdfjW9jp7TfeUU04',
    variantes: [{ nombre: 'Color', opciones: ['Negro', 'Blanco'] }],
  },
  {
    id: 6,
    nombre: 'Sony WH-1000XM6',
    descripcion: 'Auriculares Bluetooth con cancelación activa de ruido y audio de alta resolución.',
    precio: 449.99,
    imagen: '/productos/Sony WH-1000XM6 Review_ The Best Noise-Canceling Headphones of 2026.jpeg',
    pagoUrl: 'https://buy.stripe.com/test_eVqaEX0o11t60MTc9veUU05',
    variantes: [{ nombre: 'Color', opciones: ['Negro', 'Plata', 'Azul'] }],
  },
]

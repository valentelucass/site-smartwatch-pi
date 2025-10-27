// api/products.js - API endpoint para produtos
export default function handler(req, res) {
  try {
    // Em produção, lerá das variáveis de ambiente do Vercel
    const productsData = process.env.PRODUCTS_DATA || '[{"id":"1","title":"Watch 10 ultra - 49mm","price":559,"category":"Smartwatch","description":"Descrição detalhada do Watch 10 ultra.","sku":"SW-ULTRA-10-49","slug":"watch-10-ultra-49mm","stockStatus":"Em estoque","quantity":15}]';
    const products = JSON.parse(productsData);

    if (req.method === 'GET') {
      res.status(200).json(products);
    } else if (req.method === 'POST') {
      const newProduct = req.body;
      newProduct.id = Date.now().toString();
      products.push(newProduct);
      res.status(201).json(newProduct);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

const addToCartButton = document.querySelector('.add-to-cart');
    
    addToCartButton.addEventListener('click', function () {
        // 從按鈕屬性中獲取商品資訊
        const productId = addToCartButton.getAttribute('data-id');
        const productTitle = addToCartButton.getAttribute('data-title');
        const productPrice = parseFloat(addToCartButton.getAttribute('data-price'));
        const productImage = addToCartButton.getAttribute('data-image');
        
        // 構建商品物件
        const product = {
            id: productId,
            title: productTitle,
            price: productPrice,
            image: productImage,
            quantity: 1 // 默認數量為1
        };

        // 讀取現有的購物車數據（如果有）
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // 檢查購物車中是否已經有此商品
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        
        if (existingProductIndex > -1) {
            // 如果商品已經存在，更新數量
            cart[existingProductIndex].quantity += 1;
        } else {
            // 如果商品不存在，添加新商品
            cart.push(product);
        }

        // 保存更新後的購物車數據到 localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // 提示用戶商品已加入購物車
        alert(`${productTitle} 已加入購物車！`);
    });
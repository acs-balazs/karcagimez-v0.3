    tabler icons 
    nodemo in dev version

    client/src/
    ├── components/           sokszor hasznalos elemek
    │   ├── ui/
    │   │   ├── Button/
    │   │   │   ├── Button.jsx
    │   │   │   └── Button.css   ( vagy Button.module.css )
    │   │   ├── Input/
    │   │   └── Card/
    │   └── layout/           komplikaltabb genyok ( pl. navbar, footer )
    │
    ├── context/              globalis adatok ( pl. kosar tartalma, admin bejelentkezes )
    │   ├── CartContext.jsx
    │   └── AuthContext.jsx
    │
    ├── services/             a postas, url-ek egy helyen, nem kell a hookba irni mindet
    │   └── api.js
    │
    ├── features/
    │   ├── admin/
    │   │   ├── components/
    │   │   │   ├── ProductForm.jsx
    │   │   │   └── AdminSidebar.jsx
    │   │   ├── hooks/        crud szarok, a frontend backendje ( pl. useProductCrud )
    │   │   │   └── useProductCrud.js
    │   │   └── ProductManagePage.jsx
    │   │
    │   ├── products/
    │   │   ├── components/
    │   │   │   ├── ProductCard.jsx
    │   │   │   └── ProductGrid.jsx
    │   │   ├── hooks/        a hook csak hivja a service-t
    │   │   │   ├── useFetchProducts.js
    │   │   │   ├── useCartActions.js
    │   │   │   └── useProductFilters.js
    │   │   └── ProductListPage.jsx
    │   │
    │   └── catalog/
    │
    ├── pages/                oldalak amiket a router betolt
    │   ├── AdminPage.jsx
    │   ├── ShopPage.jsx
    │   ├── StoryPage.jsx
    │   └── HomePage.jsx
    │
    ├── App.jsx               itt vannak az utvonalak ( react-router )
    └── main.jsx              ez inditja el az egesz react appot

    // adatbazis

    ┌─────────────────────────┐           ┌─────────────────────────┐
    │         ADMINS          │           │        PRODUCTS         │
    ├─────────────────────────┤           ├─────────────────────────┤
    │ id            INTEGER PK│           │ id            INTEGER PK│
    │ username      TEXT      │           │ name          TEXT      │
    │ password_hash TEXT      │           │ description   TEXT      │
    │ created_at    DATETIME  │           │ price         INTEGER   │
    └─────────────────────────┘           │ weight_g      INTEGER   │
                                          │ stock         INTEGER   │
                                          │ image_url     TEXT      │
                                          │ created_at    DATETIME  │
                                          └─────────────────────────┘
    //




    // API

    GET /api/products ( osszes termek lekerese )

    GET /api/products/:id ( konkret termek lekerese )

    POST /api/admin/login

    POST /api/products ( termek feltoltes - csak adminnak )

    PUT /api/products/:id ( termek modositas - csak adminnak)

    DELETE /api/products/:id ( termek torles - csak adminnak )
    //




    server/
    ├── data/                 ( most data helyett prisma mappa )
    │   └── database.db
    │
    ├── uploads/
    │       ( termekfotok )
    │
    ├── src/
    │   ├── config/
    │   │   ├── db.js
    │   │   └── multer.js
    │   ├── middlewares/
    │   │   └── auth.js
    │   │
    │   ├── routes/
    │   │   ├── productRoutes.js
    │   │   └── adminRoutes.js
    │   │
    │   ├── controllers/
    │   │   ├── productController.js
    │   │   └── adminController.js
    │   │
    │   └── app.js
    │
    ├── server.js
    ├── package.json
    └── .gitignore

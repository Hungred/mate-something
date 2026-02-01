-- CreateTable
CREATE TABLE "events" (
    "event_id" SERIAL NOT NULL,
    "user_id" VARCHAR(191),
    "title" TEXT,
    "content" TEXT,
    "is_active" SMALLINT DEFAULT 0,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "events_pkey" PRIMARY KEY ("event_id")
);

-- CreateTable
CREATE TABLE "requests" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(191) NOT NULL,
    "content" TEXT,
    "status" VARCHAR(191) NOT NULL DEFAULT 'open',
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "room_id" INTEGER,

    CONSTRAINT "requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rooms" (
    "room_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "title" TEXT,
    "status" VARCHAR(255) DEFAULT 'idle',
    "tag" JSON,
    "viewer_count" INTEGER DEFAULT 0,
    "host_id" VARCHAR(191),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rooms_pkey" PRIMARY KEY ("room_id")
);

-- CreateTable
CREATE TABLE "shop_items" (
    "items_id" VARCHAR(20) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "category" VARCHAR(255),
    "price" INTEGER NOT NULL,
    "description" TEXT,
    "image_url" VARCHAR(255),
    "is_active" SMALLINT DEFAULT 0,
    "stock" INTEGER DEFAULT -1,

    CONSTRAINT "shop_items_pkey" PRIMARY KEY ("items_id")
);

-- CreateTable
CREATE TABLE "user_items" (
    "transaction_id" SERIAL NOT NULL,
    "user_id" VARCHAR(191) NOT NULL,
    "item_id" VARCHAR(20) NOT NULL,
    "quantity" INTEGER DEFAULT 1,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_items_pkey" PRIMARY KEY ("transaction_id")
);

-- CreateTable
CREATE TABLE "users" (
    "user_id" VARCHAR(191) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "bio" TEXT,
    "level" INTEGER DEFAULT 1,
    "coins" INTEGER DEFAULT 100,
    "avatar_url" VARCHAR(255),
    "stealth" SMALLINT DEFAULT 0,
    "accept_match" SMALLINT DEFAULT 0,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "room_id" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE INDEX "events_user_id_idx" ON "events"("user_id");

-- CreateIndex
CREATE INDEX "requests_room_id_idx" ON "requests"("room_id");

-- CreateIndex
CREATE INDEX "rooms_host_id_idx" ON "rooms"("host_id");

-- CreateIndex
CREATE INDEX "user_items_item_id_idx" ON "user_items"("item_id");

-- CreateIndex
CREATE INDEX "user_items_user_id_idx" ON "user_items"("user_id");

-- CreateIndex
CREATE INDEX "users_room_id_idx" ON "users"("room_id");

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "rooms"("room_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_items" ADD CONSTRAINT "user_items_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "shop_items"("items_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_items" ADD CONSTRAINT "user_items_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "rooms"("room_id") ON DELETE SET NULL ON UPDATE NO ACTION;

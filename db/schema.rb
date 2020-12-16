# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_16_163345) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "action_text_rich_texts", force: :cascade do |t|
    t.string "name", null: false
    t.text "body"
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["record_type", "record_id", "name"], name: "index_action_text_rich_texts_uniqueness", unique: true
  end

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "dish_orders", force: :cascade do |t|
    t.bigint "order_id", null: false
    t.bigint "dish_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["dish_id"], name: "index_dish_orders_on_dish_id"
    t.index ["order_id"], name: "index_dish_orders_on_order_id"
  end

  create_table "dishes", force: :cascade do |t|
    t.string "name"
    t.integer "cost"
    t.string "meal_category"
    t.string "dietary"
    t.text "instructions"
    t.integer "prep_time"
    t.string "threed_model"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "menu_items", force: :cascade do |t|
    t.bigint "dish_id", null: false
    t.bigint "menu_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["dish_id"], name: "index_menu_items_on_dish_id"
    t.index ["menu_id"], name: "index_menu_items_on_menu_id"
  end

  create_table "menus", force: :cascade do |t|
    t.boolean "tasting"
    t.integer "discount"
    t.bigint "restaurant_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "description"
    t.index ["restaurant_id"], name: "index_menus_on_restaurant_id"
  end

  create_table "orders", force: :cascade do |t|
    t.bigint "dish_id"
    t.bigint "wine_id"
    t.integer "total_cost_cents", null: false
    t.bigint "restaurant_id"
    t.bigint "user_id", null: false
    t.integer "discount_percentage"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "status"
    t.index ["dish_id"], name: "index_orders_on_dish_id"
    t.index ["restaurant_id"], name: "index_orders_on_restaurant_id"
    t.index ["user_id"], name: "index_orders_on_user_id"
    t.index ["wine_id"], name: "index_orders_on_wine_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.string "dietary"
    t.string "category"
    t.integer "delivery_radius"
    t.float "average_rating"
    t.string "spotify_url"
    t.string "instagram_url"
    t.string "address"
    t.string "phone_number"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.float "latitude"
    t.float "longitude"
    t.bigint "user_id"
    t.index ["user_id"], name: "index_restaurants_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.text "content"
    t.bigint "restaurant_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.index ["restaurant_id"], name: "index_reviews_on_restaurant_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "admin"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "wine_orders", force: :cascade do |t|
    t.bigint "order_id", null: false
    t.bigint "wine_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["order_id"], name: "index_wine_orders_on_order_id"
    t.index ["wine_id"], name: "index_wine_orders_on_wine_id"
  end

  create_table "wines", force: :cascade do |t|
    t.string "name"
    t.integer "cost"
    t.string "year"
    t.text "description"
    t.bigint "dish_id"
    t.bigint "restaurant_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["dish_id"], name: "index_wines_on_dish_id"
    t.index ["restaurant_id"], name: "index_wines_on_restaurant_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "dish_orders", "dishes"
  add_foreign_key "dish_orders", "orders"
  add_foreign_key "menu_items", "dishes"
  add_foreign_key "menu_items", "menus"
  add_foreign_key "orders", "dishes"
  add_foreign_key "orders", "restaurants"
  add_foreign_key "orders", "users"
  add_foreign_key "orders", "wines"
  add_foreign_key "restaurants", "users"
  add_foreign_key "reviews", "restaurants"
  add_foreign_key "wine_orders", "orders"
  add_foreign_key "wine_orders", "wines"
end

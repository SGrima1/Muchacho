class Restaurant < ApplicationRecord
  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?
  has_many :menus, dependent: :destroy
  has_many :menu_items, through: :menus
  has_many :orders, dependent: :destroy
  has_many :dishes, through: :menu_items
  has_many :reviews, dependent: :destroy
  has_one_attached :photo
  has_rich_text :description
  
  include PgSearch::Model
  pg_search_scope :global_search,
    against: [ :category, :address ],
    using: {
      tsearch: { prefix: true }
    }

  RATING_IN_WORD = { 3 => "Good", 4 => "Very good", 5 => "Excellent" }
  ICONS = {
            'Vegan' => '<i class="fas fa-leaf"></i>',
            'Gluten free'=> '<i class="fas fa-wheat"></i>',
            'Vegetarian' => '<i class="fas fa-seedling"></i>',
          }
  FLAG_SUFFIX = {
                  "American" => 'us',
                  "British"  => 'uk',
                  "French"   => 'fr',
                  "Italian"  => 'it',
                  "Japanese" => 'jp',
                }

  DIETARY_ICON_FILENAME = {
                  "Vegan" => 'dietary_vegan.png',
                  "Vegetarian"  => 'dietary_vegetarian.png',
                  "Gluten free"   => 'dietary_gluten_free.png',
                  "None" => 'dietary_fallback.png',
                  "fallback"  => 'dietary_fallback.png',
                }

  def alacarte_menu
    menus.where(tasting: false).first
  end

  def tasting_menu
    menus.where(tasting: true).first
  end

  def rating_in_words
    if self.average_rating.present?
      rating = self.average_rating.round
      return RATING_IN_WORD[rating]
    else
      return "Not rated yet"
    end
  end

  def dietary_icon
    if self.dietary.present?
      icon = ICONS[self.dietary]
      if icon.nil?
        return '<i class="far fa-empty-set"></i>'
      else
        return icon
      end
    else
      return "<div class='empty'></div>"
    end
  end

  def dietary_icon_file_name
    if self.dietary.present?
      dietary_icon_file_name = DIETARY_ICON_FILENAME[self.dietary]
    else
      dietary_icon_file_name = DIETARY_ICON_FILENAME['fallback']
    end
  end

  def flag_file_name
    suffix = FLAG_SUFFIX[self.category]
    flag_file_name = "flag-#{suffix}.png"
    if flag_file_name == "flag-.png"
      return "flag-fallback.png"
    end
    return flag_file_name
  end


end

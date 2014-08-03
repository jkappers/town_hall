class Card < ActiveRecord::Base

  belongs_to :user
  has_many :votes

  validates :description, presence: true, length: { maximum: 140 }
end

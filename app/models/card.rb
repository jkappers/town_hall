class Card < ActiveRecord::Base

  belongs_to :user

  validates_length_of :description, :maximum => 140
end

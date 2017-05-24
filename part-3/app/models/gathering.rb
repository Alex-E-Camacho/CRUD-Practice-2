class Gathering < ActiveRecord::Base
  validates :user_id, :presence => true
  validates :food, :presence => true, uniqueness: { scope: :potluck_id, message: "That dish is already being brought!" }
  validates :potluck_id, :presence => true

  belongs_to :user
  belongs_to :potluck
end

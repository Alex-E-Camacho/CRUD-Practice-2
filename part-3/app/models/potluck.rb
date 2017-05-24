class Potluck < ActiveRecord::Base
  validates :name, :location, :starts_at, :user_id, :presence => true

  belongs_to :host, :class_name => "User", :foreign_key => :user_id
  has_many :gatherings
  has_many :attendees, :through => :gatherings, :source => :user
end

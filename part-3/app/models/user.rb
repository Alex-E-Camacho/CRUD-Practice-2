class User < ActiveRecord::Base
  validates :email, :username, :presence => true, :uniqueness => true
  has_secure_password

  has_many :hosted_potlucks, :class_name => "Potluck"
end

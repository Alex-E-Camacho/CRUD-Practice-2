class CreateGatherings < ActiveRecord::Migration
  def change
    create_table :gatherings do |t|
      t.references :user, null: false
      t.references :potluck, null: false
      t.string     :food, null: false

      t.timestamps(null: false)
    end
  end
end

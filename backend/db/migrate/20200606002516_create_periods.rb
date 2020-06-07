class CreatePeriods < ActiveRecord::Migration[6.0]
  def change
    create_table :periods do |t|
      t.string :subject
      t.references :teacher, null: false, foreign_key: true

      t.timestamps
    end
  end
end

class CreateAssessments < ActiveRecord::Migration[6.0]
  def change
    create_table :assessments do |t|
      t.boolean :participation
      t.string :comment
      t.string :datetime
      t.references :teacher, null: false, foreign_key: true
      t.references :student, null: false, foreign_key: true
      t.integer :cycle

      t.timestamps
    end
  end
end

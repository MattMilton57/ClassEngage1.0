class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.string :name
      t.string :parent
      t.string :phone
      t.string :photo
      t.string :preferred_name
      t.string :preferred_pronoun
      t.string :participation_score

      t.timestamps
    end
  end
end

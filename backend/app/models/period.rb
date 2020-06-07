class Period < ApplicationRecord
    belongs_to :teacher
    has_many :students_periods
    has_many :students, through: :students_periods
end

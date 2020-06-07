class Teacher < ApplicationRecord
    has_many :periods
    has_many :registrations
    has_many :students, through: :registrations
    has_many :assessments
end

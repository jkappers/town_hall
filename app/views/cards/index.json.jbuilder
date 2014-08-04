json.array! @resources.each do |card|
  json.id           card.id
  json.description  card.description
  json.votes        card.votes.length
  json.locked       card.locked
end

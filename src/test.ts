import { Card } from "./gen/timeline_games/resources/card_pb";

const card = Card.fromJsonString(
  '{"date": "2000", "title": {"value": "the title"}, "action": {"t": {"en": "the action"}}}'
);

console.log(card);

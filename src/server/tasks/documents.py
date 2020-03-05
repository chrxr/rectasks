from django_elasticsearch_dsl import Document, fields
from elasticsearch_dsl import analyzer, tokenizer
from django_elasticsearch_dsl.registries import registry
from .models import task

ngram = analyzer(
    'ngram',
    tokenizer="ngram",
)

@registry.register_document
class taskDocument(Document):
  name = fields.TextField(
    analyzer=ngram
  )

  class Index:
    name = 'tasks'
    settings = {'number_of_shards': 1,
                'number_of_replicas': 0}

  class Django:
    model = task

    fields = [
      'frequency',
    ]
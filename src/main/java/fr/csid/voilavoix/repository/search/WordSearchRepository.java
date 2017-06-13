package fr.csid.voilavoix.repository.search;

import fr.csid.voilavoix.domain.Word;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Word entity.
 */
public interface WordSearchRepository extends ElasticsearchRepository<Word, Long> {
}

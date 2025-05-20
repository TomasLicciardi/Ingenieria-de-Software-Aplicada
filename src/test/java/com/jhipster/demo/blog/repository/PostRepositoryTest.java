package com.jhipster.demo.blog.repository;

import static org.assertj.core.api.Assertions.assertThat;

import com.jhipster.demo.blog.IntegrationTest;
import com.jhipster.demo.blog.domain.Post;
import java.time.Instant;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

@IntegrationTest
class PostRepositoryTest {

    @Autowired
    private PostRepository postRepository;

    @Test
    void testSaveAndFindPost() {
        Post post = new Post();
        post.setTitle("Título de prueba");
        post.setContent("Contenido de prueba");
        post.setDate(Instant.now());
        Post saved = postRepository.save(post);
        assertThat(postRepository.findById(saved.getId())).isPresent();
    }

    @Test
    void testDeletePost() {
        Post post = new Post();
        post.setTitle("Post a eliminar");
        post.setContent("Contenido a eliminar");
        post.setDate(Instant.now());
        Post saved = postRepository.save(post);
        Long id = saved.getId();
        postRepository.deleteById(id);
        assertThat(postRepository.findById(id)).isNotPresent();
    }
}

package com.jhipster.demo.blog.repository;

import static org.assertj.core.api.Assertions.assertThat;

import com.jhipster.demo.blog.IntegrationTest;
import com.jhipster.demo.blog.domain.Blog;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

@IntegrationTest
class BlogRepositoryTest {

    @Autowired
    private BlogRepository blogRepository;

    @Test
    void testSaveAndFindBlog() {
        Blog blog = new Blog();
        blog.setName("Blog de prueba");
        blog.setHandle("prueba");
        Blog saved = blogRepository.save(blog);
        assertThat(blogRepository.findById(saved.getId())).isPresent();
    }

    @Test
    void testDeleteBlog() {
        Blog blog = new Blog();
        blog.setName("Blog a eliminar");
        blog.setHandle("eliminar");
        Blog saved = blogRepository.save(blog);
        Long id = saved.getId();
        blogRepository.deleteById(id);
        assertThat(blogRepository.findById(id)).isNotPresent();
    }
}

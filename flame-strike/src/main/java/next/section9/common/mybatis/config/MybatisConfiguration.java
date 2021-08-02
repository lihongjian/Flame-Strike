package next.section9.common.mybatis.config;

import next.section9.common.mybatis.interceptor.PageInterceptor;
import org.mybatis.spring.boot.autoconfigure.ConfigurationCustomizer;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MybatisConfiguration {


    public PageInterceptor pageInterceptor () {
        PageInterceptor pageInterceptor = new PageInterceptor();
        return pageInterceptor;
    }

    public MybatisObjectFactory mybatisObjectFactory(){
        return new MybatisObjectFactory();
    }
    @Bean
    @ConditionalOnMissingBean
    public ConfigurationCustomizer configurationCustomizer () {
        return new ConfigurationCustomizer() {
            @Override
            public void customize(org.apache.ibatis.session.Configuration configuration) {
                configuration.addInterceptor(pageInterceptor());
//                configuration.setObjectFactory(mybatisObjectFactory());
            }
        };
    }
}

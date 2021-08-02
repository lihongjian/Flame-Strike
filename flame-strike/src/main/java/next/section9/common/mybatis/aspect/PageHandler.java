package next.section9.common.mybatis.aspect;

import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class PageHandler {


//    @Pointcut("execution(* next.section9.dao.IOrderDao.*(..))")
//    public void pointcut(){
//
//    }
//    @Around("pointcut()")
//    public Object logAround(ProceedingJoinPoint joinPoint) throws Throwable {
//
//        Object[] args = joinPoint.getArgs();
//        boolean pageIntercept = false;
//        if(args[0] instanceof PageParam){
//            pageIntercept = true;
//        }
//        Object o = joinPoint.proceed();
//        if (o instanceof List && pageIntercept){
//            PageList pl = new PageList((List) o);
//            return pl;
//        }
//        return o;
//    }
}

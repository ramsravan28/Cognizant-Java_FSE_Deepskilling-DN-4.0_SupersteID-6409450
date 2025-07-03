package com.example.hibernate;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.example.entity.Employee;

public class HibernateTest {
    public static void saveEmployee() {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = null;

        try {
            tx = session.beginTransaction();
            Employee emp = new Employee(1, "Hibernate User", 50000.0);
            session.save(emp);
            tx.commit();
        } catch (Exception e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
    }
}

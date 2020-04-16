class LRU:

    def __init__(self):
        self.lrucache = []
        self.size = 6
    
    def put(self,item):
        if item not in self.lrucache:
            if(self.lrucache.__len__() < self.size):
                self.lrucache.append(item)
            else:
                self.lrucache.pop(0)

                self.lrucache.append(item)        
        else:
            m1 = self.lrucache.remove(item)
            self.lrucache.append(m1)

    def get(self):
        return self.lrucache[0]

    def get_cache(self):
        return self.lrucache


class LRUTest:
    def __init__(self):
        pass
    def testingmethod(self):
        l = LRU()
        a = [1,2,3,4,5,6]
        for i in a:
            l.put(i)
        assert l.get_cache() == [1,2,3,4,5,6], "testcase1 failed"
        print("Testcase 1 Passed")
        l = LRU()
        b = [88, 26, 122, 105, 57, 123]
        for i in b:
            l.put(i)
        assert l.get_cache() == [88, 26, 122, 105, 57, 123], "testcase2 failed"
        print("Testcase 2 Passed")
        l = LRU()
        c = [35, 45, 501, 507, 45, 501, 38]
        for i in c:
            l.put(i)
        assert l.get_cache() == [35, 507, 45, 501, 38], "testcase3 failed"
        print("Testcase 3 Passed")
        print("All Testcases Passed")
          
li = LRUTest()
li.testingmethod()
    
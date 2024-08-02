import { TestBed } from '@angular/core/testing';

import { TopDishesListService } from './top-dishes-list.service';

describe('TopDishesListService', () => {
  let service: TopDishesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopDishesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

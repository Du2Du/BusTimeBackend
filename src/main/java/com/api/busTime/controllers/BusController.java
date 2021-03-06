package com.api.busTime.controllers;

import com.api.busTime.model.dtos.CreateBusDTO;
import com.api.busTime.model.dtos.UpdateBusDTO;
import com.api.busTime.model.entities.BusModel;
import com.api.busTime.model.bo.BusService;
import com.api.busTime.model.bo.UsersService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/v1/bus")
public class BusController {

    private final BusService busService;
    
    private final UsersService usersService;

    public BusController(BusService busService, UsersService usersService) {
        this.busService = busService; this.usersService = usersService;
    }

    @GetMapping("/{id}")
    public BusModel getById(@PathVariable Long id){
        return this.busService.getById(id);
    }
    
    @GetMapping("/user/{id}")
    public List<BusModel> findBusForUser(@PathVariable Long id){
        return this.busService.findBusForUser(id);
    }
    @GetMapping("/line")
    public Page<BusModel> listForLine(@RequestParam(name = "line") String line, Pageable pageable){
        return this.busService.listForLine(line, pageable);
    }

    @PostMapping
    public BusModel create(@RequestBody @Validated CreateBusDTO createBusDTO) {
        return this.busService.create(createBusDTO);
    } 
    
    @PutMapping("/{id}")
    public BusModel update(@PathVariable Long id, @RequestBody @Validated UpdateBusDTO updateBusDTO) {
        return this.busService.update(id, updateBusDTO);
    }
    
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id){
        return this.busService.delete(id);
    }
    
    @GetMapping
    public Page<BusModel> listAll(Pageable pageable){
        return this.busService.listAll(pageable);
    }
    
}
